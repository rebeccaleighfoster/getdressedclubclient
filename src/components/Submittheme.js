import React from "react";
import { Formik, ErrorMessage } from "formik";
import Nav from './Nav'
import Particles from "./Particles";
import { URL } from '../config'

const SubmitThemeForm = () => (
  <div>
    <Formik
      initialValues={{
        themename: "",
      }}
      onSubmit={(values, { setSubmitting }) => {
        fetch(`${URL}/themes`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        })
          .then((response) => response.json())
          .then((data) => {
            setSubmitting(false);
            window.location.href = "/AddLog";
      });
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
            <h1 > Submit A Theme </h1>
            <h3>
              <label htmlFor="themename">Theme: </label>
              <input
                required
                value={values.themename}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Plaid"
                type="text"
                name="themename"
                id="themename"
              />
              <ErrorMessage name="ThemeName" />
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
function SumbitTheme() {
  return (
    <>
    <Particles />
    <Nav />
    <SubmitThemeForm />
    </>
  );
}
export default SumbitTheme;