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
    {/* Search input */}
    <div className="mb-3 d-flex gap-2">
      <input
        className="form-control"
        placeholder="Search films"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button className="btn btn-primary" onClick={() => setSearchParam(input)}>
        Search
      </button>
    </div>

    {/* Films grid */}
    <div className="row g-3">
      {films.map((film: Films) => (
        <div key={film.id} className="col-12 col-md-6 col-lg-4">
          <div className="card h-100">
            {film.image_url && (
              <img src={film.image_url} className="card-img-top" alt={film.title} />
            )}
            <div className="card-body d-flex flex-column">
              <h5 className="card-title">{film.title}</h5>
              <p><strong>Episode:</strong> {film.episode_id}</p>
              <p><strong>Director:</strong> {film.director}</p>
              <p><strong>Producer:</strong> {film.producer}</p>
              <p><strong>Release Date:</strong> {film.release_date}</p>
              <p className="card-text" style={{ whiteSpace: 'pre-line', flexGrow: 1 }}>
                {film.opening_crawl}
              </p>
              <ul className="list-unstyled mb-3">
                <li><strong>Characters:</strong> {film.characters_count}</li>
                <li><strong>Planets:</strong> {film.planets_count}</li>
                <li><strong>Starships:</strong> {film.starships_count}</li>
                <li><strong>Vehicles:</strong> {film.vehicles_count}</li>
                <li><strong>Species:</strong> {film.species_count}</li>
              </ul>
              <a
                href={`https://swapi.thehiveresistance.com/api/films/${film.id}`}
                className="btn btn-outline-primary mt-auto"
                target="_blank"
                rel="noopener noreferrer"
              >
                Read More
              </a>
            </div>
            <div className="card-footer text-muted">
              Created: {new Date(film.created).toLocaleDateString()} | Edited: {new Date(film.edited).toLocaleDateString()}
            </div>
          </div>
        </div>
      ))}
    </div>

    {/* Pagination */}
    {lastPage > 1 && (
      <div className="d-flex justify-content-center align-items-center mt-4 gap-3">
        <button
          className="btn btn-secondary"
          disabled={page === 1}
          onClick={() => setPageParam(page - 1)}
        >
          Previous
        </button>
        <span>
          Page {page} of {lastPage}
        </span>
        <button
          className="btn btn-secondary"
          disabled={page === lastPage}
          onClick={() => setPageParam(page + 1)}
        >
          Next
        </button>
      </div>
    )}
  </>
);
};

export default FilmsPage;
