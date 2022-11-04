import React from "react";
import "../styles/Card.css";
import { Link } from "react-router-dom";
import {Helmet} from "react-helmet-async"

const Card = ({ data }) => {
  return (
    <div className="card-section">
       <Helmet>
        <title>AltSchool</title>
        <meta name="description" content="AltSchool second semester Exam" />
        <link rel="canonical" href="/" />
       </Helmet>
      <div className="link">
        <Link className="link-home" to="/">
          Home
        </Link>
        <Link className="link-home" to="/">
          Next
        </Link>
      </div>
      <div className="card-container">
        <div className="image-container">
          <img alt="Profile Pic" src={data.picture.medium} />
        </div>
        <div className="card-ctn">
          <div className="text">
            <div className="title">
              <h4>
                {data.name.title} {data.name.first} {data.name.last}
              </h4>
            </div>
            <p>{data.email}</p>
          </div>
          <div className="button">
            <button
              className="custom-btn"
              style={{ width: "6rem" }}
              onClick={() => {
                alert("Page Currently Unavailble");
              }}
            >
              View More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
