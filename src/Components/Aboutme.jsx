import React from "react";
import { Link } from "react-router-dom";

function Aboutme() {
  return (
    <>
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
      <section className="bg-dark p-3 ">
        <div className="container">
          <div className="row text-center">
            <div className="col-md my-5">
              <div className="card bg-white text-dark">
                <div className="card-body text-center">
                  <h3 className="card-title mb-3">PORTFOLIO</h3>
                  <p className="card-text">
                    This Project houses my Portfolio Page showing Frontend
                    related works outside the Altschool Curriculum. Built with
                    React, styled with Bootstrap & Custom CSS, all codes was
                    documented and pusheed to my Github account using GIT CLI,
                    deployed and hosted with Firebase Application.
                  </p>
                  <button className="btn btn-primary mt-1">
                    <a
                      id="Link"
                      target="_blank"
                      href="https://olasenimoses-55e72.web.app"
                    >
                      View
                    </a>
                  </button>
                </div>
              </div>
            </div>
            <div className="col-md my-5">
              <div className="card bg-light text-dark">
                <div className="card-body text-center">
                  <h3 className="card-title mb-3">CALCULATOR </h3>
                  <p className="card-text">
                    This Project houses my Assignment for Second semester of the
                    Altschool Curricular. Built with React, styled with Custom
                    CSS, all codes was documented and pushed to my Github using
                    GIT CLI. account, deployed and hosted with Firebase
                    Application.
                  </p>
                  <button className="btn btn-primary mt-1">
                    <a
                      id="Link"
                      target="_blank"
                      href="https://altschool-calc.web.app"
                    >
                      View
                    </a>
                  </button>
                </div>
              </div>
            </div>
            <div className="col-md my-5">
              <div className="card bg-light text-dark">
                <div className="card-body text-center">
                  <h3 className="card-title mb-3">PAGINATION</h3>
                  <p className="card-text">
                    This Project houses my Assignment/Project for Second
                    semester of the Altschool Curricular. Built with React,
                    styled with Custom CSS, all codes was documented and pushed
                    to my Github account using GIT CLI, deployed and hosted with
                    Firebase Application.
                  </p>
                  <button className="btn btn-primary mt-1">
                    <a
                      id="Link"
                      target="_blank"
                      href="https://exam-47fd6.web.app"
                    >
                      View
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Aboutme;
