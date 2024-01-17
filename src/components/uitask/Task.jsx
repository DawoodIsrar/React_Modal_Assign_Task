import React from "react";
import "./task.css";
import { FaUsers } from "react-icons/fa";
const Task = () => {
  return (
    <>
      <div className="main-container">
        <button className="btn">Explore</button>
        <div className="background-div">
          <div className="inner-div">
            <div className="carditem">
              <FaUsers color="white" size={100} />
              <h1 className="number">59</h1>
              <hr className="line"></hr>
              <h3>OUR RESOURCES</h3>
            </div>
            <div className="carditem">
              <FaUsers color="white" size={100} />
              <h1 className="numbers">59</h1>
              <hr className="line"></hr>
              <h3>OUR RESOURCES</h3>
            </div>{" "}
            <div className="carditem">
              <FaUsers color="white" size={100} />
              <h1 className="numbers">59</h1>
              <hr className="line"></hr>
              <h3>OUR RESOURCES</h3>
            </div>{" "}
            <div className="carditem">
              <FaUsers color="white" size={100} />
              <h1 className="numbers">59</h1>
              <hr className="line"></hr>
              <h3>OUR RESOURCES</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Task;
