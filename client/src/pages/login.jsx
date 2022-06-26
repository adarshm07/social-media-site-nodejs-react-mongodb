import { Formik, Form, Field, ErrorMessage } from "formik";
import axios from "axios";

export default function Login() {
  return (
    <div>
      <h2>Login</h2>
      <Formik
        initialValues={{ username: "", password: "" }}
        validate={(values) => {
          const errors = {};
          if (!values.username) {
            errors.username = "Required";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            setSubmitting(false);
            console.log(values);
            axios
              .post("http://localhost:4000/auth/login", values, {
                withCredentials: true,
                credentials: "include",
              })
              .then((res) => {
                console.log("data", res.data);
              });
          }, 400);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <Field type="text" name="username" />
            <ErrorMessage name="username" component="div" />
            <Field type="password" name="password" />
            <ErrorMessage name="password" component="div" />
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
