import React from "react";
import ImageUpload from "../components/logs/ImageUpload"
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <BrowserRouter>
      <ImageUpload />
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});