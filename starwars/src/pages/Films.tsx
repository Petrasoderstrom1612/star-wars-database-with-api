import type { Films } from "../services/types";
import { usePaginatedResource } from "../hooks/usePaginatedResource";
import { useState } from "react";

const FilmsPage = () => {
  const {
    data: films,
    page,
    lastPage,
    loading,
    error,
    setPageParam,
    setSearchParam,
  } = usePaginatedResource<Films>("/films"); // <Films> ensures film has correct type

  const [input, setInput] = useState("");

  if (loading) return <p>Loading…</p>;
  if (error) return <p>{error}</p>;

  return (
    <>
      <input
        placeholder="Search films"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={() => setSearchParam(input)}>Search</button>

      <ul>
        {films.map((film: Films) => (
          <li key={film.id}>{film.title}</li>
        ))}
      </ul>

      {/* {lastPage > 1 && ( */}
        <div>
          <button disabled={page === 1} onClick={() => setPageParam(page - 1)}>
            Previous
          </button>
          <span>
            {" "}
            Page {page} of {lastPage}{" "}
          </span>
          <button
            disabled={page === lastPage}
            onClick={() => setPageParam(page + 1)}
          >
            Next
          </button>
        </div>
      {/* )} */}
    </>
  );
};

export default FilmsPage;
