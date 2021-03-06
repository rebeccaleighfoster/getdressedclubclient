import React from "react";
import { Link } from "react-router-dom";
import Nav from "./components/Nav";
import Particles from "./components/Particles";
export default class LandingPage extends React.Component {
  render() {
    return (
      <>
        <Particles />
        <Nav />
        <div className="info">
          <h1> Get Dressed Club </h1>
          <h2>
            A self-care app for friends to take care of themselves and each
            other during quarantine.
          </h2>
          <p>
            An app inspired by a group text friends made during quarantine
            called the Get Dressed Club.
          </p>
          <p>
            Everyday users can come to this app and get a theme their outfit for
            the day. They can submit outfit themes, get an outfit theme of the
            day, log other self-care tasks, and offer a helping hand.
          </p>
          <button>
            <Link to="/signup"> Get Started </Link>
          </button>
        </div>
      </>
    );
  }
}
