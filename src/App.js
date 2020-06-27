import React from "react";
import LandingPage from "./LandingPage";
import LogList from './components/Loglist'
import { BrowserRouter as Router, Route } from "react-router-dom";
import Submittheme from "./components/Submittheme";
import SignUp from "./components/Signup";
import Logactivity from './components/Logactivity'
import { URL } from '../src/config'


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
      
      <Route path="/AddLog" exact component={Logactivity} />
     {/* <Route path="/Projects/edit/:project_id" exact component={EditExistingProject} />
      <Route path="/Projects/" exact component={ListAllProjects} />
      <Route path="/Weavers/:weaver_id" exact component={OneWeaver} /> */}
    </Router>
  </>
);

export default App;
