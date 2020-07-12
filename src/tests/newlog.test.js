import React from "react";
import NewLog from "../components/logs/NewLog"
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <BrowserRouter>
      <NewLog />
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});