import React from "react";
import { Aj, bg, ele } from "./Images";
import { Link } from "react-router-dom";
import { signInWithRedirect, auth, provider } from "../config";
import "../styles/Mobile.css";

function Home() {
  const UsersImage = [
    {
      id: 1,
      Title: <img id="users" src={Aj} alt="" />,
    },
    {
      id: 1,
      Title: <img id="users" src={bg} alt="" />,
    },
    {
      id: 1,
      Title: <img id="users" src={ele} alt="" />,
    },
    {
      id: 1,
      Title: <img id="users" src={bg} alt="" />,
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
      <main>
        <h1 className="h1">
          Join AltSchool Africa <br />{" "}
          <span className="spanOne">On Discord</span>{" "}
        </h1>
        <div className="users-img">
          <span>{listUsers}</span>
        </div>
        <p>Setemi and 8 others have joined this workspace</p>
        <div className="btn">
          <button onClick={signIn}>
            <Link id="Link" to="/">
              Sign in With Google
            </Link>
          </button>
          <h6>Or</h6>
          <button>
            <Link id="Link" to="/display">
              Sign in With Email
            </Link>
          </button>
        </div>
      </main>
    </div>
  );
}

export default Home;
