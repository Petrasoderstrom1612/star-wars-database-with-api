import type { FC } from "react";
import type { PaginationProps } from "../services/types";

export const Pagination: FC<PaginationProps> = ({
  page,
  lastPage,
  setPage,
  search,
}) => {
  if (lastPage <= 1) return null;

  const buildLink = (p: number) =>
    `?page=${p}${search ? `&search=${search}` : ""}`;

  return (
    <nav className="d-flex justify-content-center mt-4">
      <ul className="pagination shadow-sm">

        {/* First page */}
        <li className={`page-item ${page === 1 ? "disabled" : ""}`}>
          <a className="page-link" href={buildLink(1)}>
            First
          </a>
        </li>

        {/* Previous */}
        <li className={`page-item ${page === 1 ? "disabled" : ""}`}>
          <button
            className="page-link"
            onClick={() => setPage(page - 1)}
            disabled={page === 1}
          >
            ⬅
          </button>
        </li>

        {/* Current page indicator */}
        <li className="page-item active">
          <span className="page-link">
            {page} / {lastPage}
          </span>
        </li>

        {/* Next */}
        <li className={`page-item ${page === lastPage ? "disabled" : ""}`}>
          <button
            className="page-link"
            onClick={() => setPage(page + 1)}
            disabled={page === lastPage}
          >
            ➡
          </button>
        </li>

        {/* Last page */}
        <li className={`page-item ${page === lastPage ? "disabled" : ""}`}>
          <a className="page-link" href={buildLink(lastPage)}>
            Last
          </a>
        </li>

      </ul>
    </nav>
  );
};