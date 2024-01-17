import React from "react";
import "./main.css";
import mbl from "./../../img/mbl.png";
import man from "./../../img/man.jpg";
import facebook from "./../../img/facebook.png";
import twitter from "./../../img/twitter.png";
import instagram from "./../../img/instagram.png";

const Main = () => {
  return (
    <>
      <div className="main-Large-Screen">
        <div className="Main-container">
          <div className="header-and-services">
            <div className="head">
              <div className="Main-Header">
                <div className="head-large">
                  <div className="head-small">
                    {" "}
                    <div className="header">
                      <h1 className="logo">
                        Work<span>it</span>
                      </h1>
                      <h4>Apply for access</h4>
                    </div>
                  </div>

                  <div className="heading2">
                    <h1>
                      Data <span>tailored</span> to your needs
                    </h1>
                  </div>
                  <button className="header-btn">Learn more</button>
                  <br></br>
                  <div className="image">
                    <img src={mbl}></img>
                  </div>
                </div>
              </div>
            </div>

            <div className="services">
              <div className="card">
                <div className="num">1</div>
                <div className="content">
                  <h2>Actionable insights</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Delectus est nostrum, unde libero, deserunt mollitia aliquid
                    doloribus aut
                  </p>
                </div>
              </div>
              <div className="card">
                <div className="num">1</div>
                <div className="content">
                  <h2>Actionable insights</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Delectus est nostrum, unde libero, deserunt mollitia aliquid
                    doloribus aut
                  </p>
                </div>
              </div>
              <div className="card">
                <div className="num">1</div>
                <div className="content">
                  <h2>Actionable insights</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Delectus est nostrum, unde libero, deserunt mollitia aliquid
                    doloribus aut
                  </p>
                </div>
              </div>
            </div>
          </div>
          <br></br>
          <br></br>
          <div className="testimonial">
            <div className="man">
              <img src={man}></img>
            </div>
            <div className="apply">
              <h1>Be the first to test</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Delectus est nostrum, unde libero, deserunt mollitia aliquid
                doloribus aut
              </p>
              <button className="footer-btn">Learn more</button>
            </div>
          </div>
          <div className="footer">
            <h1 className="logo">
              Work<span>it</span>
            </h1>
            <div className="logos">
              <img src={facebook}></img>
              <img src={twitter}></img>
              <img src={instagram}></img>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
