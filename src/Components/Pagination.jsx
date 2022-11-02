import React from "react";
import "../styles/Pagination.css"

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
      {pageNumbers.map((pageNumber) => (
        <span
          key={pageNumber}
          onClick={() => {
            setCurrentPage(pageNumber);
          }}
          className="page-number"
          style={{
            color: currentPage === pageNumber ? "white" : "white",
            backgroundColor: currentPage === pageNumber ? "black" : "black",
          }}
        >
          {pageNumber}
        </span>
      ))}
    </nav>
  );
}

export default Pagination;
