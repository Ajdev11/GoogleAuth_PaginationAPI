import React, { useState, useEffect } from "react";
import Card from "./Card";
import Pagination from "./Pagination";
import {Helmet} from "react-helmet-async"
import { Link } from "react-router-dom";


function Display() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  async function getData() {
    setLoading(true);
    const res = await fetch(`https://randomuser.me/api/`);
    try {
      const response = await res.json();
      const result = response.results;
      const info = response.info;
      setData(result);
      console.log(result);
      console.log(info);
      setLoading(false);
    } catch (error) {
      console.log(error.message);
    }
  }
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
     <Helmet>
        <title>AltSchool</title>
        <meta name="description" content="AltSchool second semester Exam" />
        <link rel="canonical" href="/" />
       </Helmet>
     {/* NAVBAR */}
     <navbar className="navbar navbar-expand-lg bg-dark navbar-dark py-1">
        <div className="container">
          <span className="navbar-brand text-success fw-bold mt-2">
            AltSchool Exam
          </span>
          <button
            className="navbar-toggler shadow-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navmenu"
          >
            <div className="navbar-toggler-icon"></div>
          </button>
          <div className="collapse navbar-collapse" id="navmenu">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Back Home
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </navbar>
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        {loading ? (
          <h1 className="load"> LOADING..</h1>
        ) : (
          data.map((item, idx) => {
            console.log(item);
            return <Card data={item} key={idx} />;
          })
        )}
        <div style={{ width: "15rem" }}>
          <Pagination
            UsersPerPage={1}
            currentPage={1}
            setCurrentPage={4}
            totalUsers={5}
          />
        </div>
      </div>
    </>
  );
}
export default Display;
