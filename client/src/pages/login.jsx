import { Formik, Form, Field, ErrorMessage } from "formik";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { userDetails } from "../store/index";
import { useEffect } from "react";

export default function Login() {
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();

  useEffect(() => {
    // if (document.cookie("access_token")) {
    //   console.log("cookies - access token", document.cookie.access_token);
    // }
  }, []);

  const login = async (values) => {
    const response = await axios.post(
      `${process.env.REACT_APP_API_URL}/auth/login`,
      values,
      {
        withCredentials: true,
        credentials: "include",
      }
    );
    dispatch(userDetails(response.data));
    console.log(response.data);
  };
  console.log("user", user);
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
        onSubmit={login}
      >
        {({ values }) => (
          <Form>
            <label>Username</label>
            <Field type="text" name="username" />
            <ErrorMessage name="username" component="div" />
            <label>Password</label>
            <Field type="password" name="password" />
            <ErrorMessage name="password" component="div" />
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
