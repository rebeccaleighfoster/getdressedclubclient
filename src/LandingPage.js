import React from "react";
import { Link } from "react-router-dom";
import Nav from "./components/Nav";
import { URL } from "./config";
import Particles from './components/Particles'
export default class LandingPage extends React.Component {
  render() {
    console.log {URL}
    return (
      <>
      <Particles />
      <Nav />
          <div className="info">
            <h1> Get Dressed Club </h1>
            <h2>
              A self care app for friends to take care of themselves and
              eachother during quarantine.
            </h2>
            <p>
              An app inspired by a group text friends made during quarantine
              called the Get Dressed Club.
            </p>
            <p>
              Everyday users can come to this app and get a theme their outfit
              for the day. They can upload pictures of what they wore, log other
              self-care tasks, and offer a helping hand.
            </p>
            <button>
            <Link to="/signup"> Get Started </Link>
            </button>
          </div>
      </>
    );
  }
}
