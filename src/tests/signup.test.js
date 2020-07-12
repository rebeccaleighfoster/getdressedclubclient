import React from "react";
import SignUp from "../components/Signup"
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <BrowserRouter>
      <SignUp />
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});