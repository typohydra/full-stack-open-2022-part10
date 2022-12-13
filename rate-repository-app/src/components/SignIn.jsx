import { Formik } from "formik";
import { SignInForm } from "./SignInForm";
import useSignIn from "./../hooks/useSignIn";
import { useNavigate } from "react-router-native";

import * as yup from "yup";

const initialValues = {
  username: "",
  password: "",
};

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .trim()
    .min(3, "Username length must be greater or equal to 3")
    .max(30, "Username length must not be greater than 30")
    .required("Username is required"),
  password: yup
    .string()
    .min(8, "Password length must be greater or equal to 8")
    .required("Password is required"),
});

const SignIn = () => {
  const navigate = useNavigate();
  const [signIn] = useSignIn();

  const onSubmit = async (values) => {
    const { username, password } = values;

    try {
      await signIn({ username, password });
      navigate("/");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

export default SignIn;
