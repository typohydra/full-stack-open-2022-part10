import { Formik } from "formik";
import { SignInForm } from "./SignInForm";
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
  const onSubmit = (values) => {
    console.log(values);
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
