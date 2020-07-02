import React, { Component } from "react";
import Nav from "../Nav";
import Gravatar from "react-gravatar";
import md5 from "md5";
import { Link } from 'react-router-dom'
import { format, parseISO } from 'date-fns';

class Loglist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dailylog: [],
      logImages: []
    };
  }


  handleLogDelete = (log_id) => {
    fetch(`http://localhost:4040/dailylog/${log_id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => {
        if (res.ok) {
          this.fetchLogs();
        }
      })
      .catch((error) => {
        console.error({ error });
      });
  };

  //get all logs
  fetchLogs = () => {
    fetch(`http://localhost:4040/dailylog`)
      .then((dailylogresponse) => {
        if (!dailylogresponse.ok)
          return dailylogresponse.json().then((e) => Promise.reject(e));
        return dailylogresponse.json();
      })
      .then((dailylog) => {
        this.setState({
          dailylog,
        });
      })
      .catch((error) => {
        console.error({ error });
      });
    };

  componentDidMount() {
    this.fetchLogs();
  }

  render() { 
     return (
      <>
        <Nav />
        {this.state.dailylog.map((log) => (
          <ul key={log.log_id} className="info">
            <li> Name: {log.friendname} </li>
            {log.imagename ? <img
              src={`${process.env.REACT_APP_DEV_URL}/${log.imagename}`}
              className="PicOfDay"
            ></img> : <Gravatar md5={md5(log.log_id)} size={150} rating="pg" default="monsterid" className="CustomAvatar-image" />}
            <li> Date: {format(parseISO(log.date), 'MMMM dd, yyyy')}</li>
            <li> How did you move your body today? {log.movebody}</li>
            <li> I drank {log.glasseswater} glasses of water </li>
            {log.leavehouse === true ? (
              <li> Did you leave your house? Yes </li>
            ) : (
              <li> Did you leave your house? No </li>
            )}
            <li> Win of the day? {log.winofday} </li>
            {log.shower === true ? (
              <li> Did you shower? Yes </li>
            ) : (
              <li> Did you shower? No </li>
            )}
            {log.cleanroom === true ? (
              <li> Did you clean your house? Yes </li>
            ) : (
              <li> Did you clean your house? No </li>
            )}
            {log.dodishes === true ? (
              <li> Did you do your dishes? Yes </li>
            ) : (
              <li> Did you do your dishes? No </li>
            )}
            {log.washface === true ? (
              <li> Did you do your skincare routine? Yes </li>
            ) : (
              <li> Did you do your skincare routine? No </li>
            )}
            {log.call === true ? <li> I would like a call from a friend </li> : null }
            <li> {log.fooddrop} </li>
            <button>
              <Link to={`/EditLog/${log.log_id}`}> Edit </Link>
            </button>
            <button onClick={() => this.handleLogDelete(log.log_id)}> Delete </button>
          </ul>
        ))}
      </>
    );
  }
}

export default Loglist;
