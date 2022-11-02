import React from "react";
import "./Card.css";

const Card = ({ data }) => {
  return (
    <div className="card-container">
      <div className="image-container">
        <img alt="Profile Pic" src={data.picture.medium} />
      </div>
      <div className="card-ctn">
        <div className="text">
          <div className="title">
            <h4>{data.name.title} {data.name.first} {data.name.last}</h4>
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
  );
};

export default Card;
