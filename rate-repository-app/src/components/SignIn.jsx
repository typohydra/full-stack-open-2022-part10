import { Formik } from "formik";
import { SignInForm } from "./SignInForm";
import useSignIn from "./../hooks/useSignIn";
import AuthStorage from "../utils/authStorage";
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
  const [signIn] = useSignIn();
  const signinStorage = new AuthStorage("signin");

  const onSubmit = async (values) => {
    const { username, password } = values;

    try {
      const { data } = await signIn({ username, password });
      signinStorage.setAccessToken(data.authenticate.accessToken);
      console.log(await signinStorage.getAccessToken());
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
