import React from "react";
import { Formik, ErrorMessage } from "formik";
import Nav from './Nav'
import * as Yup from "yup";
 import { URL } from "../config";
import { Link } from 'react-router-dom'
const SubmitThemeForm = () => (
  <div>
    <Formik
      initialValues={{
        ThemeName: "",
      }}
      onSubmit={(values, { setSubmitting }) => {
        console.log(values, "from submit theme");
        // fetch(`http://localhost:4040/themes`, {
        //   method: "POST",
        //   headers: {
        //     "Content-Type": "application/json",
        //   },
        //   body: JSON.stringify(values),
        // })
        //   .then((response) => response.json())
        //   .then((data) => {
            setSubmitting(false);
            // window.location.href = "/loglist";
      }}
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
            <div > Submit A Theme </div>
            <div>
              <label htmlFor="ThemeName">Theme: </label>
              <input
                required
                value={values.ThemeName}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Demin"
                type="text"
                name="ThemeName"
                id="ThemeName"
              />
              <ErrorMessage name="ThemeName" />
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
function SumbitTheme() {
  return (
    <>
    <Nav />
    <SubmitThemeForm />
    </>
  );
}
export default SumbitTheme;