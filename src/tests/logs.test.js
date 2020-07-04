import React from "react";
import Loglist from "../components/logs/Loglist"
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";


it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <BrowserRouter>
      <Loglist />
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});