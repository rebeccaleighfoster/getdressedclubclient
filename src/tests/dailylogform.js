import React from "react";
import DailyLogFrom from "../components/logs/DailyLogForm"
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

it("renders without crashing", () => {
  const div = document.createElement("div");
   const log_id = 12 
  ReactDOM.render(
    <BrowserRouter>
      <DailyLogFrom />
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});