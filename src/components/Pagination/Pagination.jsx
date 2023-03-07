import React from 'react'

const Pagination = ({ changePage, totalPages, page }) => {
  return (
    <ul className="page">
      {totalPages.map((p) => (
        <li
          onClick={() => changePage(p)}
          key={p}
          className={
            page === p ? "page__number page__number_active" : "page__number"
          }
        >
          {p}
        </li>
      ))}
    </ul>
  );
};

export default Pagination;