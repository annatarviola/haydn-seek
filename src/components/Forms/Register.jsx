import { useState } from "react";
import { Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import OuterCard from "../Layout/OuterCard";
import InnerCard from "../Layout/InnerCard";
import AuthContext from "../../store/authContext";

const Register = () => {
  const baseURL = "http://localhost:5173";

  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    username: "",
    password: "",
    passwordConfirmation: "",
  };

  const errStyle = { color: "#b12a2a", fontSize: "14px" };

  const onSubmit = (e) => {
    e.preventDefault();

    const body = {
      firstName,
      lastName,
      email,
      username,
      password,
    };

    axios.post();
  };

  return (
    <OuterCard>
      <h3>Sign Up</h3>
      <hr />
      <InnerCard>
        <Formik
          initialValues={initialValues}
          validationSchema={Yup.object({
            firstName: Yup.string()
              .max(20, "Must be 20 characters or less")
              .required("Required"),
            lastName: Yup.string()
              .max(20, "Must be 20 characters or less")
              .required("Required"),
            email: Yup.string()
              .email("Invalid email address")
              .required("Required"),
            username: Yup.string()
              .max(20, "Must be 20 characters or less")
              .required("Required"),
            password: Yup.string()
              .min(8, "Must be at least 8 characters")
              .required("Required"),
            passwordConfirmation: Yup.string()
              .oneOf([Yup.ref("password")], "Your passwords do not match.")
              .required("Please retype your password."),
          })}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
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
            </div>

            <Link to="/login">
              <button className="outline-btn">Need to Login?</button>
            </Link>
            <button type="submit" className="solid-btn">
              Sign Up
            </button>
          </Form>
        </Formik>
      </InnerCard>
    </OuterCard>
  );
};

export default Register;
