import React, { Component } from "react";
import PropTypes from "prop-types";

class GetThemes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      themes: [],
    };
  }

  fetchThemes = () => {
    fetch(`http://localhost:4040/themes`)
      .then((themesresponse) => {
        if (!themesresponse.ok)
          return themesresponse.json().then((e) => Promise.reject(e));
        return themesresponse.json();
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
    this.fetchThemes();
  }
  render() {
    const allThemes = this.state.themes;
    const themeOfDay = allThemes[Math.floor(Math.random() * allThemes.length)];

    return <div> hi  </div>;
  }
}

GetThemes.propTypes = {};

export default GetThemes;
