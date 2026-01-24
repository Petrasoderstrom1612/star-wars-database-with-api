import type { FC } from "react";
import type { PaginationProps } from "../services/types";

export const Pagination: FC<PaginationProps> = ({ page, lastPage, setPage }) => {
  if (lastPage <= 1) return null;

  return (
    <div className="d-flex justify-content-center align-items-center mt-4 gap-3">
      <button className="btn btn-secondary" disabled={page === 1} onClick={() => setPage(page - 1)}>
        Previous
      </button>
      <span>
        Page {page} of {lastPage}
      </span>
      <button className="btn btn-secondary" disabled={page === lastPage} onClick={() => setPage(page + 1)}>
        Next
      </button>
    </div>
  );
};
