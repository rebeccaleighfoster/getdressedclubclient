import React from "react";
import Nav from "../Nav";
import DailyLogForm from './DailyLogForm';


function AddNewLog() {
  console.log("add form ran");
  return (
    <>
      <Nav />
      <DailyLogForm />
    </>
  );
}

export default AddNewLog;
