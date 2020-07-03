import React, { Component } from "react";
import Nav from "./Nav";
import Particles from "./Particles";
import { URL } from '../config'
 
class GetTheme extends Component {
  constructor(props) {
    super(props);
    this.state = {
      themes: [],
      themeOfDay: null,
    };
  }

  fetchTheme = () => {
    fetch(`${URL}/themes`)
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

  componentDidMount() {
    this.fetchTheme();
  }

  generateTheme() {
    const themeOfDay = this.state.themes[
      Math.floor(Math.random() * this.state.themes.length)
    ];
    this.setState({
      themeOfDay,
    });
  }

  render() {
    const { themeOfDay } = this.state;
    return (
      <>
      <Particles />
        <Nav />
        <div className="info">
        <h2> Check Your Theme For The Day</h2>
        {themeOfDay ? (
          <div>
           <h3> {themeOfDay.themename} </h3>
          </div>
        ) : null}

        <button onClick={() => this.generateTheme()}>
          {themeOfDay ? "Chose Different Theme" : "Show Today\'s Theme"}
        </button>
        </div>
</>
    );
  }
}

export default GetTheme;
