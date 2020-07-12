import React from "react";
import Nav from "../Nav"
import DailyLogForm from "./DailyLogForm";
import { URL } from "../../config";
import Particles from '../Particles'

class EditLog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      log: {},
    };
  }

  //get only one log to be edited 
  fetchLogsByLog_Id = () => {
    const { log_id } = this.props.match.params;
    console.log(this.props.match.params)
    fetch(`${URL}/dailylog/${log_id}`) 
      .then((resp) => {
        if (!resp.ok) return resp.json().then((e) => Promise.reject(e));
        return resp.json();
      })
      .then((data) => {
        data.date = new Date(data.date)
        this.setState({
          log: data,
        });
      })
      .catch((error) => {
        console.error({ error });
      });
  };

  componentDidUpdate(prevProps) {
    if (
      this.props.match.params.log_id !== prevProps.match.params.log_id
    ) {
      this.fetchLogsByLog_Id();
    }
  }
  componentDidMount() {
    this.fetchLogsByLog_Id();
 }
  render() {
    console.log(this.state.log);
    return (
      <>
      <Particles />
      <Nav />
      <DailyLogForm log={this.state.log} /> 
      </>
    );
  }
}

export default EditLog;