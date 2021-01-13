import React, { Component } from 'react';
export default class Portfolio extends Component {
  render() {
    return (
      <React.Fragment>
        <section id="portfolio">
  <div className="row">
    <div className="twelve columns collapsed">
    <a href="https://github.com/zward2/"><h1>Check Out My Work <u>Here</u>.</h1></a>
    <h1> <strong> Recent Web Development Projects </strong> </h1>
      {/* portfolio-wrapper */}
      <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
        <div className="columns portfolio-item">
          <div className="item-wrap">
            <a href="#modal-01" title>
              <img alt="Zee's Chat" src="images/portfolio/chat_pic.jpg" />
              <div className="overlay">
                <div className="portfolio-item-meta">
                  <h5>The Girls' Room</h5>
                  <p>A Private Chatroom</p>
                </div>
              </div>
              <div className="link-icon"><i className="icon-plus" /></div>
            </a>
          </div>
        </div> {/* item end */}
        <div className="columns portfolio-item">
          <div className="item-wrap">
            <a href="#modal-02" title>
              <img alt="" src="/images/Celsius_calc.jpeg" />
              <div className="overlay">
                <div className="portfolio-item-meta">
                  <h5>Temperature Calculator</h5>
                  <p>Using React components and this.state</p>
                </div>
              </div>
              <div className="link-icon"><i className="icon-plus" /></div>
            </a>
          </div>
        </div> {/* item end */}
        <div className="columns portfolio-item">
          <div className="item-wrap">
            <a href="#modal-03" title>
              <img alt="" src="images/portfolio_pic1.jpg.png" />
              <div className="overlay">
                <div className="portfolio-item-meta">
                  <h5>React Portfolio</h5>
                  <p>MERN Development</p>
                </div>
              </div>
              <div className="link-icon"><i className="icon-plus" /></div>
            </a>
          </div>
        </div> {/* item end */}
        <div className="columns portfolio-item">
          <div className="item-wrap">
            <a href="#modal-04" title>
              <img alt="" src="images/amazonafront.png" />
              <div className="overlay">
                <div className="portfolio-item-meta">
                  <h5>Ecommerce app amazona</h5>
                  <p>Amazon Replica Design</p>
                </div>
              </div>
              <div className="link-icon"><i className="icon-plus" /></div>
            </a>
          </div>
        </div> {/* item end */}{/*
        <div className="columns portfolio-item">
          <div className="item-wrap">
            <a href="#modal-05" title>
              <img alt="" src="images/portfolio/farmerboy.jpg" />
              <div className="overlay">
                <div className="portfolio-item-meta">
                  <h5>Farmer Boy</h5>
                  <p>Branding</p>
                </div>
              </div>
              <div className="link-icon"><i className="icon-plus" /></div>
            </a>
          </div>
        </div> {/* item end */}{/*
        <div className="columns portfolio-item">
          <div className="item-wrap">
            <a href="#modal-06" title>
              <img alt="" src="images/portfolio/girl.jpg" />
              <div className="overlay">
                <div className="portfolio-item-meta">
                  <h5>Girl</h5>
                  <p>Photography</p>
                </div>
              </div>
              <div className="link-icon"><i className="icon-plus" /></div>
            </a>
          </div>
        </div> {/* item end */}{/*
        <div className="columns portfolio-item">
          <div className="item-wrap">
            <a href="#modal-07" title>
              <img alt="" src="images/portfolio/origami.jpg" />
              <div className="overlay">
                <div className="portfolio-item-meta">
                  <h5>Origami</h5>
                  <p>Illustrration</p>
                </div>
              </div>
              <div className="link-icon"><i className="icon-plus" /></div>
            </a>
          </div>
        </div> {/* item end */}{/*
        <div className="columns portfolio-item">
          <div className="item-wrap">
            <a href="#modal-08" title>
              <img alt="" src="images/portfolio/retrocam.jpg" />
              <div className="overlay">
                <div className="portfolio-item-meta">
                  <h5>Retrocam</h5>
                  <p>Web Development</p>
                </div>
              </div>
              <div className="link-icon"><i className="icon-plus" /></div>
            </a>
          </div>
        </div>  {/* item end */}
      </div> {/* portfolio-wrapper end */}
    </div> {/* twelve columns end */}
    {/* Modal Popup
	      --------------------------------------------------------------- */}
    <div id="modal-01" className="popup-modal mfp-hide">
      <img className="scale-with-grid" src="images/portfolio/modals/m-chat_pic.jpg" alt="" />
      <div className="description-box">
        <h4>The Girls'Room</h4>
        <p> This is one of my first efforts in making a full-stack web app using the MERN stack</p>
        <span className="categories"><i className="fa fa-tag" />Full stack</span>
      </div>
      <div className="link-box">
        <a href="https://github.com/zward2/Zees_Chatroom">Details</a>
        <a className="popup-modal-dismiss">Close</a>
      </div>
    </div>{/* modal-01 End */}
    <div id="modal-02" className="popup-modal mfp-hide">
      <img className="scale-with-grid" src="images/temperature_calc.png" alt="" />
      <div className="description-box">
        <h4>React.js Temperature Calculator</h4>
        <p>I made this project to hone my skills with react components and this.state .</p>
        <span className="categories"><i className="fa fa-tag" />JavaScript, HTML, CSS,React.js</span>
      </div>
      <div className="link-box">
        <a href="https://github.com/zward2/week-11-homework-react-math-calc/tree/answer8_19">Details</a>
        <a className="popup-modal-dismiss">Close</a>
      </div>
    </div>{/* modal-02 End */}
    <div id="modal-03" className="popup-modal mfp-hide">
      <img className="scale-with-grid" src="images/portfolio_pic1.jpg.png" alt="" />
      <div className="description-box">
        <h4>React.js Portfolio</h4>
        <p>I wanted to showcase my react projects with a react built portfolio.</p>
        <span className="categories"><i className="fa fa-tag" />MongoDB, Mongoose, Express.js, React.js, Node.js, Axios, HTML, CSS, Bootstrap,Heroku</span>
      </div>
      <div className="link-box">
        <a href="https://github.com/zward2/ziedahs-portfolio">Details</a>
        <a className="popup-modal-dismiss">Close</a>
      </div>
    </div>{/* modal-03 End */}
    <div id="modal-04" className="popup-modal mfp-hide">
      <img className="scale-with-grid" src="images/amazonafront.png" alt="" />
      <div className="description-box">
        <h4>Amazona </h4>
        <p>I made this as additional practice making full-stack apps with JavaScript's MERN stack.</p>
        <span className="categories"><i className="fa fa-tag" />MongoDB, Mongoose, Express.js, React.js, Node.js, Axios, React Router, HTML, CSS, Bootstrap</span>
      </div>
      <div className="link-box">
        <a href="https://github.com/zward2/amazona">Details</a>
        <a className="popup-modal-dismiss">Close</a>
      </div>
    </div>{/* modal-04 End */}{/*
    <div id="modal-05" className="popup-modal mfp-hide">
      <img className="scale-with-grid" src="images/portfolio/modals/m-farmerboy.jpg" alt="" />
      <div className="description-box">
        <h4>Farmer Boy</h4>
        <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
        <span className="categories"><i className="fa fa-tag" />Branding, Webdesign</span>
      </div>
      <div className="link-box">
        <a href="http://www.behance.net">Details</a>
        <a className="popup-modal-dismiss">Close</a>
      </div>
    </div>{/* modal-05 End */}
    <div id="modal-06" className="popup-modal mfp-hide">
      <img className="scale-with-grid" src="images/portfolio/modals/m-girl.jpg" alt="" />
      <div className="description-box">
        <h4>Girl</h4>
        <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
        <span className="categories"><i className="fa fa-tag" />Photography</span>
      </div>
      <div className="link-box">
        <a href="http://www.behance.net">Details</a>
        <a className="popup-modal-dismiss">Close</a>
      </div>
    </div>{/* modal-06 End */}
    <div id="modal-07" className="popup-modal mfp-hide">
      <img className="scale-with-grid" src="images/portfolio/modals/m-origami.jpg" alt="" />
      <div className="description-box">
        <h4>Origami</h4>
        <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
        <span className="categories"><i className="fa fa-tag" />Branding, Illustration</span>
      </div>
      <div className="link-box">
        <a href="http://www.behance.net">Details</a>
        <a className="popup-modal-dismiss">Close</a>
      </div>
    </div>{/* modal-07 End */}
    <div id="modal-08" className="popup-modal mfp-hide">
      <img className="scale-with-grid" src="images/portfolio/modals/m-retrocam.jpg" alt="" />
      <div className="description-box">
        <h4>Retrocam</h4>
        <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
        <span className="categories"><i className="fa fa-tag" />Webdesign, Photography</span>
      </div>
      <div className="link-box">
        <a href="http://www.behance.net">Details</a>
        <a className="popup-modal-dismiss">Close</a>
      </div>
    </div>{/* modal-01 End */}
  </div> {/* row End */}
</section>

      </React.Fragment>
    );
  }
}
