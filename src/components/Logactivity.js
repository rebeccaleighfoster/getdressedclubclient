import React from "react";
import { Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
// import { URL } from "../../config";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Nav from "./Nav";
import { Link } from 'react-router-dom'

const SignUpForm = () => (
  <div>
    <Formik
      initialValues={{
        call: false,
        cleanroom: false,
        dodishes: false,
        fooddrop: false,
        friendname: "",
        glasseswater: '',
        leavehouse: "",
        movebody: "",
        shower: "",
        washface: "",
        winofday: "",
        date: new Date(),
      }}
        onSubmit={(values, { setSubmitting }) => {
          console.log(values, "from submit dailylog");
        //   fetch(`${URL}/dailylog`, {
        //     method: "POST",
        //     headers: {
        //       "Content-Type": "application/json",
        //     },
        //     body: JSON.stringify(values),
        //   })
        //     .then((response) => response.json())
        //     .then((data) => {
        setSubmitting(false);
        //       // window.location.href = "/loglist";
        //     });
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
          setFieldValue,
        } = props;
        return (
          <form onSubmit={handleSubmit} className="form">
            <div> Add today's activity </div>
            <div>
              <label htmlFor="friendname">Name: </label>
              <input
                required
                value={values.friendname}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Enter Name"
                type="friendname"
                name="friendname"
                id="friendname"
              />
              <ErrorMessage name="friendname" />
            </div>
            <div>
                <label htmlFor="image"> Upload your outfit: </label>
                <input type="file" name="image" accept="image/x-png,image/gif,image/jpeg" />
            </div>
            <div>
              <label htmlFor="date"> Date: </label>
              <DatePicker
                selected={values.date}
                dateFormat="MMMM d, yyyy"
                className="form-control"
                name="date"
                onChange={(date) => setFieldValue("date", date)}
              />
            </div>
            <div>
              <label htmlFor="friendname">
                How did you move your body today:
              </label>
              <input
                required
                value={values.movebody}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="I walked around my block"
                type="text"
                name="movebody"
                id="movebody"
              />
            </div>
            <div>
              <label htmlFor="glasseswater">
                How many glasses of water did you drink:{" "}
              </label>
              <input
                required
                value={values.glasseswater}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="8"
                type="number"
                name="glasseswater"
                id="glasseswater"
              />
            </div>
            <div>
                <label>Did you leave the house?</label>
              <label htmlFor="leavehouse-yes">Yes</label>
              <input
                required
                value={true}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Yes"
                type="radio"
                name="leavehouse"
                id="leavehouse-yes"
              />
              <label htmlFor="leavehouse-no">No</label>
              <input
                required
                value={false}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="No"
                type="radio"
                name="leavehouse"
                id="leavehouse-no"
              />
            </div>
            <div>
              <label htmlFor="winofday">
                What was your win of the day? 
              </label>
              <input
                required
                value={values.winofday}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="I am proud of myself for not getting too frustrated at my coworker"
                type="text"
                name="winofday"
                id="winofday"
              />
            </div>
            <div>
                <label>Did you shower</label>
              <label htmlFor="shower-yes">Yes</label>
              <input
                required
                value={true}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Yes"
                type="radio"
                name="shower"
                id="shower-yes"
              />
              <label htmlFor="shower-no">No</label>
              <input
                required
                value={false}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="No"
                type="radio"
                name="shower"
                id="shower-no"
              />
            </div>
            <div>
                <label>Did you clean your room?</label>
              <label htmlFor="cleanroom-yes">Yes</label>
              <input
                required
                value={true}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Yes"
                type="radio"
                name="cleanroom"
                id="cleanroom-yes"
              />
              <label htmlFor="cleanroom-no">No</label>
              <input
                required
                value={false}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="No"
                type="radio"
                name="cleanroom"
                id="cleanroom-no"
              />
            </div>
            <div>
                <label>Did you do the dishes?</label>
              <label htmlFor="dodishes-yes">Yes</label>
              <input
                required
                value={true}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Yes"
                type="radio"
                name="dodishes"
                id="dodishes-yes"
              />
              <label htmlFor="dodishes-no">No</label>
              <input
                required
                value={false}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="No"
                type="radio"
                name="dodishes"
                id="dodishes-no"
              />
            </div>
            <div>
                <label>Did you do your skincare routine?</label>
              <label htmlFor="washface-yes">Yes</label>
              <input
                required
                value={true}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Yes"
                type="radio"
                name="washface"
                id="washface-yes"
              />
              <label htmlFor="washface-no">No</label>
              <input
                required
                value={false}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="No"
                type="radio"
                name="washface"
                id="washface-no"
              />
            </div>
            <div>
                <label>Food Drop-off</label>
                <br></br>
              <label htmlFor="fooddrop-yes">I would like someone to drop off food for me</label>
              <input
                required
                value={true}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Yes"
                type="radio"
                name="fooddrop"
                id="fooddrop-yes"
              />
              <br></br>
              <label htmlFor="fooddrop-no">I am available to drop off food for someone </label>
              <input
                required
                value={false}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="No"
                type="radio"
                name="fooddrop"
                id="fooddrop-no"
              />
            </div>
            <div>
                <label>Phone Call</label>
                <br></br>
              <label htmlFor="call-yes">I would like a phone call with a friend </label>
              <input
                required
                value={true}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Yes"
                type="radio"
                name="call"
                id="call-yes"
              />
              <br></br>
              {/* <label htmlFor="call-no"> I do not need a call with a friend right now </label>
              <input
                required
                value={false}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="No"
                type="radio"
                name="call"
                id="call-no"
              /> */}
            </div>
            <div>
                <label>Socailly Distant Walk</label>
                <br></br>
              <label htmlFor="distacewalk-yes">I would like to hang out with someone for a social distant walk </label>
              <input
                required
                value={true}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Yes"
                type="radio"
                name="fooddrop"
                id="fooddrop-yes"
              />
              <br></br>
              {/* <label htmlFor="fooddrop-no">I don't need to hangout with anyone right now </label>
              <input
                required
                value={false}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="No"
                type="radio"
                name="fooddrop"
                id="fooddrop-no"
              /> */}
            </div>
            <Link to='/loglist'>
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
