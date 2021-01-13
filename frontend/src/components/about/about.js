import React, { Component } from 'react';
export default class About extends Component {
  render() {
    return (
      <React.Fragment>
          <section id="about">
  <div className="row">
    <div className="three columns">
      <img className="profile-pic" src="images/profilepicz.jpg" alt="Picture of Myself" />
    </div>
    <div className="nine columns main-col">
      <h2>About Me</h2>
      <p>  I am a creative problem solver who is eager to be on a journey with endless learning opportunities. I have always loved using my creativity to experiment with new ideas and pushing myself toward further growth. My hunger for learning has lead to proficiency in HTML, CSS, Javascript, and React. My need for creativity and results lead me here as a Software Engineer.   </p>
      <div className="row">
        <div className="columns contact-details">
          <h2>Contact Details</h2>
          <p className="address">
            <span>Ziedah Ward</span><br />
            <span>Greater Boston Area<br />
              Massachusetts
            </span><br />
            <span>(857) 492-5565</span><br />
            <span>Ziedah.Ward001@umb.edu</span>
          </p>
        </div>
        <div className="columns download">
          <p>
            <a href="images/Zwardresume0112.pdf" className="button"><i className="fa fa-download" />Download Resume</a>
          </p>
        </div>
      </div> {/* end row */}
    </div> {/* end .main-col */}
  </div>
</section>

    
      </React.Fragment>
    );
  }
}
