import React from "react";
import { Link } from 'react-router-dom';
import { URL } from '../../config'
import Nav from '../Nav'
import Particles from "../Particles";
  
class ImageUpload extends React.Component {
  uploadDailyLogImage = (e) => {
    console.log(e.target.files);
    const formData = new FormData();
    const { log_id } = this.props.match.params;
    formData.set("enctype", "multipart/form-data");
    formData.append("file", e.target.files[0]);
    fetch(`${URL}/dailylog/image/upload/${log_id}`, {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
    };

  render() {
    return (
      <>
      <Particles />
      <Nav />
      <div className="form">
        <label htmlFor="image"> Upload your outfit: </label>
        <br></br>
        <button>
        <input
          type="file"
          name="image"
          onChange={this.uploadDailyLogImage}
          accept="image/x-png,image/gif,image/jpeg"
        />
        </button>
        <br></br>
        <Link to='/loglist'>Submit Photo</Link>
        <br></br>
        <Link to='/loglist'>Skip Today's Photo </Link>
      </div>
      </>
    );
  }
}

export default ImageUpload;
