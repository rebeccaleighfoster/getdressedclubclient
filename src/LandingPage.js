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
            <h1> Get Dressed Club! </h1>
            <h2> Check your theme for the day</h2>
            {themeOfDay ? <div style={{ border: `1px dotted black`, background: 'black', color: 'white' }}>{themeOfDay.themename}</div> : null}
            
            <button onClick={() => this.generateTheme()}>{themeOfDay ? 'Chose different theme' : 'Show todays theme'}</button>
            {/*randomly choose a theme to enter ^*/}
            <p>
              {" "}
              An app inspired by a group text friends made during quarantine
              called the "getting dressed club". Every day there was an outfit
              theme and we would all match each other and send selfies of our
              matching outfits.
            </p>

            <p>
              Instead of traditional social media apps that focus on the
              exciting and notable parts of life, this is an app that lets you
              track your friends' basic self-care routines. Every day, users can
              log what they did to take care of themselves, upload pictures of
              matching outfits and can offer or ask for a helping hand if they
              are having trouble getting things done.
            </p>
            <Link to="/signup"> Get Started! </Link>
          </div>
        </section>
      </>
    );
  }
}
