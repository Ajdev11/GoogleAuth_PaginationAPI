import React from "react";
import "../styles/Pagination.css";
import {Helmet} from "react-helmet-async"


function Pagination({ UsersPerPage, totalUsers, currentPage, setCurrentPage }) {
  const pageNumbers = [];

  for (
    let pageNumber = 1;
    pageNumber <= Math.ceil(totalUsers / UsersPerPage);
    pageNumber++
  ) {
    pageNumbers.push(pageNumber);
  }
  return (
      <nav className="page-numbers">
         <Helmet>
        <title>AltSchool</title>
        <meta name="description" content="AltSchool second semester Exam" />
        <link rel="canonical" href="/" />
       </Helmet>
        {pageNumbers.map((pageNumber) => (
          <span
            key={pageNumber}
            onClick={() => {
              setCurrentPage(pageNumber);
            }}
            className="page-number"
            style={{
              color: currentPage === pageNumber ? "white" : "",
              backgroundColor: currentPage === pageNumber ? "black" : "",
            }}
          >
            {pageNumber}
          </span>
        ))}
      </nav>
  );
}

export default Pagination;
