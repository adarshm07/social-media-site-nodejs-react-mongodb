import { Formik, Form, Field, ErrorMessage } from "formik";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { userDetails } from "../store/index";

export default function Register() {
  //   const user = useSelector((state) => state.user.user);
  //   const dispatch = useDispatch();

  const register = async (values) => {
    const response = await axios.post(
      `${process.env.REACT_APP_API_URL}/auth/register`,
      values,
      {
        withCredentials: true,
        credentials: "include",
      }
    );
    // dispatch(userDetails(response.data));
    console.log(response.data);
  };
//   console.log("user", user);
  return (
    <div>
      <h2>Login</h2>
      <Formik
        initialValues={{ username: "", password: "", email: "", name: "" }}
        validate={(values) => {
          const errors = {};
          if (!values.username) {
            errors.username = "Required";
          }
          return errors;
        }}
        onSubmit={register}
      >
        {({ values }) => (
          <Form>
            <label>Name</label>
            <Field type="text" name="name" />
            <ErrorMessage name="name" component="div" />
            <br />
            <label>Email</label>
            <Field type="text" name="email" />
            <ErrorMessage name="email" component="div" />
            <br />
            <label>Username</label>
            <Field type="text" name="username" />
            <ErrorMessage name="username" component="div" />
            <br />
            <label>Password</label>
            <Field type="password" name="password" />
            <ErrorMessage name="password" component="div" />
            <br />
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
