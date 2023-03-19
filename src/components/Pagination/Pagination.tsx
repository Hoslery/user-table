import React from 'react'

interface IPaginationProps {
  changePage: (page: number) => void,
  totalPages: number[],
  page: number
}

const Pagination: React.FC<IPaginationProps> = ({ changePage, totalPages, page }) => {
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