import React from "react";
import Nav from "../Nav"
import DailyLogForm from "./DailyLogForm";
import { URL } from "../../config";

class EditLog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      log: {},
    };
  }

  //get only one log
  fetchLogsByLog_Id = () => {
    const { log_id } = this.props.match.params;
    fetch(`${ URL }/dailylog/${log_id}`) 
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
      <Nav />
      <DailyLogForm log={this.state.log} /> 
      </>
    );
  }
}

export default EditLog;