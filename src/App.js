import React from "react";
import LandingPage from "./LandingPage";
import LogList from './components/logs/Loglist'
import { BrowserRouter as Router, Route } from "react-router-dom";
import Submittheme from "./components/Submittheme";
import SignUp from "./components/Signup";
import ImageUpload from "./components/logs/ImageUpload";
import { URL } from '../src/config'
import GetThemes from "./components/GetThemes";
import EditLog from "./components/logs/EditLog"
import AddNewLog from "./components/logs/NewLog";

const App = () => (
  // console.log( URL )
  <>
    <Router>
      <Route path="/" exact component={LandingPage} />
      <Route path="/LogList" exact component={LogList} />
       <Route path="/SubmitTheme" exact component={Submittheme} />
      <Route
        path="/SignUp"
        exact
        component={SignUp}
      />
      <Route path="/EditLog/:log_id" exact component={EditLog} />
      <Route path="/themes" exact component={GetThemes} />
      <Route path="/AddLog" exact component={AddNewLog} />
      <Route path="/AddLog/upload/:log_id" exact component={ImageUpload} />
    </Router>
  </>
);

export default App;
