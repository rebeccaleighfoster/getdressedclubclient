import React from "react";
import { Link } from "react-router-dom";
import Nav from "./components/Nav";
import { URL } from "./config";

export default class LandingPage extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          themes: [],
          themeOfDay: null
      }
    }

  fetchTheme = () => {
      fetch('http://localhost:4040/themes')
        .then((themeresponse) => {
          if (!themeresponse.ok)
            return themeresponse.json().then((e) => Promise.reject(e));
          return themeresponse.json();
        })
        .then((themes) => {
          this.setState({
            themes,
          });
        })
        .catch((error) => {
          console.error({ error });
        });
    };


  componentDidMount(){
    this.fetchTheme();
  }

  generateTheme() {
    const themeOfDay = this.state.themes[Math.floor(Math.random() * this.state.themes.length)];
    this.setState({
      themeOfDay
    })
  }
  
  render() {
    const { themeOfDay } = this.state;
   
    return (
      <>
        <Nav />
        <section>
          <div className="info">
            <h1> Get Dressed Club </h1>
            <h2> Check your theme for the day</h2>
            {themeOfDay ? <div style={{ border: `1px dotted black`, background: 'black', color: 'white' }}>{themeOfDay.themename}</div> : null}
            
            <button onClick={() => this.generateTheme()}>{themeOfDay ? 'Chose different theme' : 'Show todays theme'}</button>
            <h2>
              A self care app for friends to take care of themselves and eachother during quarantine.
              </h2>
              <p>
        An app inspired by a group text friends made during quarantine called
        the Get Dressed Club.</p>
      <p>
        Everyday users can come to this app and get a theme their outfit for the day. 
        They can upload pictures of what they wore, log other self-care tasks, and offer a helping hand.
      </p>
            <Link to="/signup"> Get Started </Link>
          </div>
        </section>
      </>
    );
  }
}
