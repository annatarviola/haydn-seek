import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import OuterCard from "../Layout/OuterCard";
import InnerCard from "../Layout/InnerCard";
import AuthContext from "../../store/authContext";
import styles from "./Register.module.css";
import { baseURL } from "../../App";

const Register = () => {
  const authCtx = useContext(AuthContext);

  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState(false)

  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    username: "",
    password: "",
    passwordConfirmation: "",
  };

  const validationSchema = Yup.object({
    firstName: Yup.string()
      .max(20, "Must be 20 characters or less")
      .required("Required"),
    lastName: Yup.string()
      .max(20, "Must be 20 characters or less")
      .required("Required"),
    email: Yup.string().email("Invalid email address").required("Required"),
    username: Yup.string()
      .max(20, "Must be 20 characters or less")
      .required("Required"),
    password: Yup.string()
      .min(8, "Must be at least 8 characters")
      .required("Required"),
    passwordConfirmation: Yup.string()
      .oneOf([Yup.ref("password")], "Your passwords do not match.")
      .required("Please retype your password."),
  });

  const errStyle = { color: "#b12a2a", fontSize: "14px" };

  const onSubmit = (values) => {
    setSubmitting(true)

    const { firstName, lastName, email, username, password } = values;

    const body = { firstName, lastName, email, username, password };

    axios
      .post(`${baseURL}/register`, body)
      .then((res) => {
        console.log("AFTER REGISTRATION", res.data);
        setError(false)
        setSubmitting(false)
        authCtx.login(res.data.token, res.data.exp, res.data.userId);
      })
      .catch((err) => {
        setSubmitting(false);
        setError(true)
        console.log(err)});
  };

  return (
    <OuterCard>
      <h3>Sign Up</h3>
      <hr />
      <InnerCard>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          <Form>
            <div className="input-container">
              <div className={styles.label_container}>
                <label htmlFor="firstName" className="input-label">
                  First Name
                </label>
                <div style={errStyle}>
                  <ErrorMessage name="firstName" />
                </div>
              </div>
              <Field name="firstName" type="text" />
            </div>

            <div className="input-container">
              <div className={styles.label_container}>
                <label htmlFor="lastName" className="input-label">
                  Last Name
                </label>
                <div style={errStyle}>
                  <ErrorMessage name="lastName" />
                </div>
              </div>
              <Field name="lastName" type="text" />
            </div>

            <div className="input-container">
              <div className={styles.label_container}>
                <label htmlFor="email" className="input-label">
                  Email Address
                </label>
                <div style={errStyle}>
                  <ErrorMessage name="email" />
                </div>
              </div>
              <Field name="email" type="email" />
            </div>

            <div className="input-container">
              <div className={styles.label_container}>
                <label htmlFor="username" className="input-label">
                  Username
                </label>
                <div style={errStyle}>
                  <ErrorMessage name="username" />
                </div>
              </div>
              <Field name="username" type="text" />
            </div>

            <div className="input-container">
              <div className={styles.label_container}>
                <label htmlFor="password" className="input-label">
                  Password
                </label>
                <div style={errStyle}>
                  <ErrorMessage name="password" />
                </div>
              </div>
              <Field name="password" type="password" />
            </div>

            <div className="input-container">
              <div className={styles.label_container}>
                <label htmlFor="passwordConfirmation" className="input-label">
                  Confirm Password
                </label>
                <div style={errStyle}>
                  <ErrorMessage name="passwordConfirmation" />
                </div>
              </div>
              <Field name="passwordConfirmation" type="password" />
            {submitting && (
              <span className={styles.submitting}>Submitting...</span>
            )}
            {error && <span className={styles.error}>Username or email already exists.</span>}
            </div>


            <Link to="/login">
              <button type="button" className="outline-btn" disabled={submitting}>
                Need to Login?
              </button>
            </Link>
            <button type="submit" className="solid-btn" disabled={submitting}>
              Sign Up
            </button>
          </Form>
        </Formik>
      </InnerCard>
    </OuterCard>
  );
};

export default Register;
