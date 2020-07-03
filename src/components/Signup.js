import React from "react";
import { Formik, ErrorMessage } from "formik";
import Nav from "./Nav";
 import { URL } from "../config";
import Particles from './Particles'

const SignUpForm = () => (
  <div>
    <Formik
      initialValues={{
        name: "",
      }}
      onSubmit={(values, { setSubmitting }) => {
        fetch(`${ URL }/friends`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        })
          .then((response) => response.json())
          .then((data) => {
            setSubmitting(false);
           window.location.href = "/loglist";
          });
      }}
    >
      {(props) => {
        const {
          values,
          isSubmitting,
          handleChange,
          handleBlur,
          handleSubmit,
          handleReset,
        } = props;
        return (
          <form onSubmit={handleSubmit} className="form">
            <h1> Get Started </h1>
            <h3>
              <label htmlFor="friendname">Name:  </label>
              <input
                required
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Enter Name"
                type="text"
                name="name"
                id="name"
              />
              <ErrorMessage name="name" />
            </h3>
            <br></br>
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </form>
        );
      }}
    </Formik>
  </div>
);
function SignUp() {
  return (
    <>
     <Particles />
      <Nav />
      <SignUpForm />
    </>
  );
}
export default SignUp;
