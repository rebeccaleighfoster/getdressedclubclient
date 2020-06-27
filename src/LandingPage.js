import React from "react";
import { Link } from "react-router-dom";
import loglist from "./components/Loglist";
import Nav from "./components/Nav";
import { URL } from "./config";

export default class LandingPage extends React.Component {
  // constructor(props) {
  //     super(props);
  //     this.state = {
  //         themes: [],
  //     }
  //   }

  // fetchTheme = () => {
  //     fetch(`${URL}/themes`)
  //       .then((themeresponse) => {
  //         if (!themeresponse.ok)
  //           return themeresponse.json().then((e) => Promise.reject(e));
  //         return themeresponse.json();
  //       })
  //       .then((weavers) => {
  //         this.setState({
  //           themes,
  //         });
  //       })
  //       .catch((error) => {
  //         console.error({ error });
  //       });
  //   };
  render() {
    console.log(URL);
    return (
      <>
        <Nav />
        <section>
          <div className="info">
            <h1> Get Dressed Club! </h1>
            <h2> Theme of the day is Demin!</h2>
            {/*randomly choose a theme to enter ^*/}
           
              <p>
                {" "}
                An app in inspired by a group text friends made during quaratine
                called the "getting dressed club". Every day there was an outfit
                theme and we would all match eachother and send selfies of our
                matching outfits.
              </p>

              <p>
                Instead of traditional social media apps that focus on the
                exciting and notable parts of life, it was be an app that lets
                you track you and your friends' basic self care routines. Every
                day, users can log what they did to take care of themselves,
                upload pictures of matching outfits and can offer or ask for a
                helping hand if they are having trouble getting things done.
              </p>
              <Link to="/signup"> Get Started! </Link>
            
          </div>
        </section>
      </>
    );
  }
}
