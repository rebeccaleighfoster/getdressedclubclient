import React, { Component } from "react";
import Nav from './Nav'

class Loglist extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//         dailylog: [],
//     } 
//   }

  //get all logs
//   fetchLogs = () => {
//     fetch(`${URL}/dailylog`)
//       .then((dailylogresponse) => {
//         if (!dailylogresponse.ok)
//           return dailylogresponse.json().then((e) => Promise.reject(e));
//         return dailylogresponse.json();
//       })
//       .then((weavers) => {
//         this.setState({
//           dailylog,
//         });
//       })
//       .catch((error) => {
//         console.error({ error });
//       });
//   };


  render() {
    return(
        <>
        <Nav />
        <section>
        {/* {this.state.dailylog.map((logs) => ( */}
          <ul className="info">
              <li> Name: Arielle Johnson </li>
               <img
                    src={require("./photos/download.jpg")}
                    className="loom"
                    alt="loom"
                  ></img>
              <li> Date: June 12th, 2020</li>
              <li> How did you move your body today? Today I went on a run</li>
              <li> I drank 8 glasses of water </li>
              <li> Did you leave your house? Yes! </li>
              <li> Win of the day? I am proud of myself for going on a run </li>
              <li> Did you shower? Yes!</li>
              <li> Did you clean your room? Yes! </li>
              <li> Did you do your dishes? Yes! </li>
              <li> Did you wash your face? Yes! </li>
              <li> Do you need help, or can you provide help? </li>
              <li> I can drop off food if someone needs it, I am free for a phone call or a virtual movie night</li>
          </ul>
          <ul className="info">
              <li> Name: Kelsey Johnson </li>
              <img
                    src={require("./photos/download.jpg")}
                    className="loom"
                    alt="loom"
                  ></img>
              <li> Date: June 12th, 2020</li>
              <li> How did you move your body today? Today I went on a walk around the lake</li>
              <li> I drank 3 glasses of water </li>
              <li> Did you leave your house? Yes! </li>
              <li> Win of the day? I am proud of myself for not getting frustrated with my coworker </li>
              <li> Did you shower? Yes!</li>
              <li> Did you clean your room? No </li>
              <li> Did you do your dishes? Yes! </li>
              <li> Did you wash your face? Yes! </li>
              <li> Do you need help, or can you provide help? </li>
              <li> I would like if someone could drop off food for me, I am free for a phone call or a virtual movie night</li>
          </ul>
        {/* ))} */}
      </section>
      </>
    )
  }
}


export default Loglist;
