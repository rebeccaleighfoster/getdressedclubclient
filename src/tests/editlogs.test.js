import React from "react";
import EditLog from "../components/logs/EditLog"
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <BrowserRouter>
     <EditLog match={{ params:{}}}/>
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});