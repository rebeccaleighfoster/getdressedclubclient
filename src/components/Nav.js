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
              <Link to="/Loglist"> Track your friends</Link>
            </li>
            <li>
              <Link to="/Submittheme"> Submit a theme</Link>
            </li>
            <li>
              <Link to="/Signup"> Sign up </Link>
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