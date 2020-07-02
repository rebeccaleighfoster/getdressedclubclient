import React from "react";
import { Formik, ErrorMessage } from "formik";
import Nav from './Nav'

const SubmitThemeForm = () => (
  <div>
    <Formik
      initialValues={{
        themename: "",
      }}
      onSubmit={(values, { setSubmitting }) => {
        console.log(values, "from submit theme");
        fetch(`http://localhost:4040/themes`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        })
          .then((response) => response.json())
          .then((data) => {
            setSubmitting(false);
            window.location.href = "/Addlog";
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
            <div > Submit A Theme </div>
            <div>
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
            </div>
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
    <Nav />
    <SubmitThemeForm />
    </>
  );
}
export default SumbitTheme;