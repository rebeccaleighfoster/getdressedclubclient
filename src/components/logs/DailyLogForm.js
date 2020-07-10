import React from "react";
import { Formik, ErrorMessage } from "formik";
import { URL } from "../../config";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Component } from "react";

//fetch call for adding a log
function addLog(values, setSubmitting) {
  fetch(`${URL}/dailylog`, {
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
}

//fetch call for removing a log
const editLog = (values, setSubmitting) => {
  const id = values.log_id;
  delete values.log_id;
  fetch(`${URL}/dailylog/edit/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(values),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("from edit logs", data);
      setSubmitting(false);
      window.location.href = "/loglist";
    });
};

class Dailylog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      names: [],
    };
  }

  //fetch call for uploading photos after deployed to an upgraded database
  uploadDailyLogImage = (e) => {
    const formData = new FormData();
    formData.set("enctype", "multipart/form-data"); 
    formData.append("file", e.target.files[0]);
    fetch(`${URL}/dailylog/image/upload`, {
      method: "POST",

      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
  };

  getName = () => {
    fetch(`${URL}/friends`)
      .then((namesResponse) => {
        if (!namesResponse.ok)
          return namesResponse.json().then((e) => Promise.reject(e));
        return namesResponse.json();
      })
      .then((names) => {
        this.setState({
          names,
        });
      })
      .catch((error) => {
        console.error({ error });
      });
  };
  componentDidMount() {
    this.getName();
  }

  //render the daily log form
  render() {
    const nameslist = this.state.names;
    const names = nameslist.map((data) => (
      <option key={data.name} value={data.name}>
        {data.name}
      </option>
    ));
    return (
      <>
        <Formik
          enableReinitialize
          initialValues={this.props.log || {}}
          onSubmit={(values, { setSubmitting }) => {
            if (values.log_id) {
              editLog(values, setSubmitting);
            } else {
              addLog(values, setSubmitting);
            }
          }}
        >
          {(formProps) => {
            const {
              values,
              dirty,
              isSubmitting,
              handleChange,
              handleBlur,
              handleSubmit,
              handleReset,
              setFieldValue,
            } = formProps;
            return (
              <form onSubmit={handleSubmit} className="LogForm">
                <h3> Add today's activity </h3>
                <div>
                  <label htmlFor="friendname">Name: </label>
                  <select
                    name="friendname"
                    type="dropdown"
                    value={values.friendname}
                    onChange={handleChange}
                    id="friendname"
                  >
                    <option>Select Name</option>
                    {names}
                  </select>
                  <ErrorMessage name="friendname" />
                </div>
                <div>
                  <label htmlFor="date"> Date: </label>
                 <div >
                  <DatePicker
                    selected={values.date}
                    dateFormat="MMMM d, yyyy"
                    name="date"
                    className="date"
                    onChange={(date) => setFieldValue("date", date)}
                  />
                 </div>
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
                <div className="buttonquestion">
                  <label>Did you leave the house?</label>
                  <div className="radioButton">
                    <label htmlFor="leavehouse-yes">Yes</label>
                    <input
                      required
                      value={"yes"}
                      checked={values.leavehouse === "yes"}
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
                      value={"no"}
                      checked={values.leavehouse === "no"}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="No"
                      type="radio"
                      name="leavehouse"
                      id="leavehouse-no"
                    />
                  </div>
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
                <div className="buttonquestion">
                  <label>Did you shower? </label>
                  <div className="radiobutton">
                    <label htmlFor="shower-yes">Yes</label>
                    <input
                      required
                      value={"yes"}
                      checked={values.shower === "yes"}
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
                      value={"no"}
                      checked={values.shower === "no"}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="No"
                      type="radio"
                      name="shower"
                      id="shower-no"
                    />
                  </div>
                </div>
                <div className="buttonquestion">
                  <label>Did you clean your room?</label>
                  <div className="radiobutton">
                    <label htmlFor="cleanroom-yes">Yes</label>
                    <input
                      required
                      value={"yes"}
                      checked={values.cleanroom === "yes"}
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
                      value={"no"}
                      checked={values.cleanroom === "no"}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="No"
                      type="radio"
                      name="cleanroom"
                      id="cleanroom-no"
                    />
                  </div>
                </div>
                <div className="buttonquestion">
                  <label>Did you do the dishes?</label>
                  <div className="radiobutton">
                  <label htmlFor="dodishes-yes">Yes</label>
                  <input
                    required
                    value={"yes"}
                    checked={values.dodishes === "yes"}
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
                    value={"no"}
                    checked={values.dodishes === "no"}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="No"
                    type="radio"
                    name="dodishes"
                    id="dodishes-no"
                  />
                </div>
                </div>
                <div className="buttonquestion">
                  <label>Did you do your skincare routine?</label>
                  <div className="radiobutton">
                  <label htmlFor="washface-yes">Yes</label>
                  <input
                    required
                    value={"yes"}
                    checked={values.washface === "yes"}
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
                    value={"no"}
                    checked={values.washface === "no"}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="No"
                    type="radio"
                    name="washface"
                    id="washface-no"
                  />
                </div>
                </div>
                <div>
                  <br></br>

                  <label htmlFor="fooddrop">Food Drop Off</label>
                  <select
                    name="fooddrop"
                    value={values.fooddrop}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    id="fooddrop"
                  >
                    <option>Select</option>
                    <option value="I am in need of someone to drop off food for me - thanks!">
                      {" "}
                      I am in need of someone to drop off food for me - thanks!{" "}
                    </option>
                    <option value=" Reach out to me if you need someone to drop food off
                      for you!">
                      {" "}
                      Reach out to me if you need someone to drop food off
                      for you!{" "}
                    </option>
                  </select>
                </div>
                <div className="buttonquestion">
                  <label>Phone Call</label>
                  <br></br>
                  <label htmlFor="call-yes">
                    I would like a phone call with a friend{" "}
                  </label>
                  <input
                    value={"yes"}
                    checked={values.call === "yes"}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Yes"
                    type="radio"
                    name="call"
                    id="call-yes"
                  />
                  <br></br>
                </div>
                <div className="buttonquestion">
                  <label> Hang Out </label>
                  <br></br>
                  <label htmlFor="distacewalk-yes">
                    I am free to hang out with someone{" "}
                  </label>
                  <input
                    value={"yes"}
                    checked={values.distancewalk === "yes"}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    type="radio"
                    name="distancewalk"
                    id="distancewalk-yes"
                  />
                  <br></br>
                </div>
                <button type="submit" disabled={isSubmitting}>
                  Submit
                </button>
              </form>
            );
          }}
        </Formik>
      </>
    );
  }
}

export default Dailylog;
