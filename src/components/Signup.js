import React from "react";
import { Formik, ErrorMessage } from "formik";
import Nav from "./Nav";
import * as Yup from "yup";
import { Link } from 'react-router-dom'
// import { URL } from "../../config";

const SignUpForm = () => (
  <div>
    <Formik
      initialValues={{
        theme: "",
      }}
         onSubmit={(values, { setSubmitting }) => {
           console.log(values, "from submit theme");
      //     fetch(`${URL}/friends`, {
      //       method: "POST",
      //       headers: {
      //         "Content-Type": "application/json",
      //       },
      //       body: JSON.stringify(values),
      //     })
      //       .then((response) => response.json())
      //       .then((data) => {
              setSubmitting(false);
               // window.location.href = "/loglist";
             }}
      //   }}
    >
      {(props) => {
        const {
          values,
          dirty,
          isSubmitting,
          handleChange,
          handleBlur,
          handleSubmit,
          handleReset,
        } = props;
        return (
          <form onSubmit={handleSubmit} className="form">
            <div> Sign Up </div>
            <div>
              <label htmlFor="friendname">Name: </label>
              <input
                required
                value={values.friendname}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Enter Name"
                type="text"
                name="friendname"
                id="friendname"
              />
              <ErrorMessage name="friendname" />
            </div>
            <Link to='./loglist'>
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
            </Link>
          </form>
        );
      }}
    </Formik>
  </div>
);
function SignUp() {
  return (
    <>
      <Nav />
      <SignUpForm />
    </>
  );
}
export default SignUp;
