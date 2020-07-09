import React from "react";
import { Link } from "react-router-dom";
import '../App.css'

export default class Nav extends React.Component {
  render() {
    return (
      <>
         <div id="hamburgerNav">
         <input type="checkbox" />
          <span></span>
          <span></span>
          <span></span>
          <ul id="hamburgerLinks"> 
          <li>
              <Link to="/Signup"> Sign Up </Link>
            </li>
            <li>
              <Link to="/Loglist"> Track Your Pals</Link>
            </li>
            <li>
              <Link to="/Submittheme"> Submit an Outfit Theme</Link>
            </li>
            <li>
              <Link to='/GetTheme'> Get Outfit Theme </Link>
            </li>
            <li>
              <Link to="/Addlog"> Add a Daily Log
               </Link>
            </li>
          </ul>
          </div>
          <div className="nav">
            <ul>
            <li>
              <Link to="/Signup"> Sign Up </Link>
            </li>
            <li>
              <Link to="/Loglist"> Track Your Pals</Link>
            </li>
            <li>
              <Link to="/Submittheme"> Submit an Outfit Theme</Link>
            </li>
            <li>
              <Link to='/GetTheme'> Get Outfit Theme </Link>
            </li>
            <li>
              <Link to="/Addlog"> Add a Daily Log
               </Link>
            </li>
          </ul>
        </div>
      </>
    );
  }
}