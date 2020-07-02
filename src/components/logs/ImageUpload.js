import React from "react";

class ImageUpload extends React.Component {
  uploadDailyLogImage = (e) => {
    console.log(e.target.files);
    const formData = new FormData();
    const { log_id } = this.props.match.params;
    formData.set("enctype", "multipart/form-data");
    formData.append("file", e.target.files[0]);
    fetch(`http://localhost:4040/dailylog/image/upload/${log_id}`, {
      method: "POST",

      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
    };

  render() {
    console.log(this.props);
    return (
      <div className="form">
        <label htmlFor="image"> Upload your outfit: </label>
        <input
          type="file"
          name="image"
          onChange={this.uploadDailyLogImage}
          accept="image/x-png,image/gif,image/jpeg"
        />
      </div>
    );
  }
}

export default ImageUpload;
