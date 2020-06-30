import React from "react";
import { Link } from "react-router-dom";
import '../App.css'

export default class Nav extends React.Component {
  render() {
    return (
      <>
        {/* <div id="hamburgerNav">
          <span></span>
          <span></span>
          <span></span>
          <ul id="hamburgerLinks"> */}
          <div className="nav">
            <ul>
            <li>
              <Link to="/Loglist"> Track Your Friends</Link>
            </li>
            <li>
              <Link to="/Submittheme"> Submit a Theme</Link>
            </li>
            <li>
              <Link to="/Signup"> Sign Up </Link>
            </li>
            <li>
              <Link to="/Addlog"> Add a Daily Entry
               </Link>
            </li>
          </ul>
        </div>
      </>
    );
  }
}