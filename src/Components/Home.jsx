import React from "react";
import { Aj, bg, ele } from "./Images";
import { Link } from "react-router-dom";
import { signInWithRedirect, auth, provider } from "../config";
import "../styles/Mobile.css";
import { Helmet } from "react-helmet-async";
import { Google, Person } from "react-bootstrap-icons";


function Home() {
  const UsersImage = [
    {
      id: 1,
      Title: <img id="users" src={Aj} alt="User1" />,
    },
    {
      id: 1,
      Title: <img id="users" src={bg} alt="user2" />,
    },
    {
      id: 1,
      Title: <img id="users" src={ele} alt="User3" />,
    },
    {
      id: 1,
      Title: <img id="users" src={bg} alt="User4" />,
    },
  ];
  const listUsers = UsersImage.map((img) => <li key={img.id}>{img.Title}</li>);
  const signIn = (event) => {
    event.preventDefault();
    //signInWithRedirect(auth, provider);
    signInWithRedirect(auth, provider);
  };

  return (
    <div className="page">
      {/* SEO CONTENTS USING HELMETS */}
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
                <Link to="Aboutme" className="nav-link">
                  CheckOut My Altschool Projects
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </navbar>
      {/* MAIN PAGE CONTAINING CONTENTS */}
      <main className="container-fluid">
        <h1 className="h1 mt-4">
          Join AltSchool Africa
          <span className="spanOne text-secondary">On Discord</span>{" "}
        </h1>
        <br />
        <div className="users-img">
          <span>{listUsers}</span>
        </div>
        <p className="text-center text-info fs-4">
          Setemi and 8 others have joined this workspace
        </p>
        <div className="btn">
          <button onClick={signIn} id="btn">
            <Google color="yellow" size={16} />
            Sign in With Google
          </button>
          <button id="btn">
         firebase deployed
            <Link id="Link" to="/display">
              Check Pagination
            </Link>
          </button>
          <button id="btn">
            <Link id="Link" to="/error">
              Check ErrorPage
            </Link>
          </button>
        </div>
      </main>
    </div>
  );
}

export default Home;
