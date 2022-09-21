import React from "react";
import { arrowFunc, paginate } from "../Dash/Tabs/paginate";
function Pagination({
  postsPerPage,
  totalPosts,
  extra,
  currentPage,
  setCurrentPage
}) {
  const pageNumbers = [];
  console.log()
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  const lastPage = pageNumbers[pageNumbers.length - 1];

  const middleIndex = lastPage / 2;

  return (
    <div className="bg-dark pagination-img">
      <ul className="container-fluid d-flex justify-content-between ">
        <button
          className={
            currentPage === 1 ? `d-none` : `btn-sm btn-dark left_arrow_agent`
          }
          id="subtract"
          onClick={e => arrowFunc(e, middleIndex, currentPage, setCurrentPage)}
        >
          {String.fromCharCode(171)}
        </button>
        {pageNumbers.map(number => (
          <li
            key={number + extra}
            // name={extra}
            // id={number + extra}
            className={
              number > middleIndex
                ? `8li-pagination  d-none  list-unstyled`
                : "0li-pagination  list-unstyled" 
            }
          >
            <button 
              href="#!"
              name={extra}
              id={number + extra}
               onClick={e => paginate(number, e, setCurrentPage)}
              className={
                number === 1
                  ? `page_link${extra} active_pagination btn-sm btn-info text-light text-dark`
                  : `page_link${extra} btn-sm btn-info text-light`
              }
            >
              {number}
            </button>
          </li>
        ))}
        <button
          className={
            currentPage === lastPage
              ? `d-none`
              : `btn-sm btn-dark right_arrow_agent`
          }
          id="add"
          onClick={e => arrowFunc(e, middleIndex, currentPage, setCurrentPage)}
        >
          {String.fromCharCode(187)}
        </button>
      </ul>
    </div>
  );
}

export default Pagination;
