import { useParams, Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { get } from "../services/StarWarsAPI";
import type { Film } from "../services/types";

const FilmDetail = () => {
  const { id } = useParams<{ id: string }>(); // get the film id from URL
  const navigate = useNavigate();
  const [film, setFilm] = useState<Film | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchFilm = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await get<Film>(`/films/${id}`);
        setFilm(data);
      } catch (err) {
        console.error(err);
        setError("Failed to load film.");
      } finally {
        setLoading(false);
      }
    };

    fetchFilm();
  }, [id]);

  if (loading) return <p>Loading…</p>;
  if (error) return <p>{error}</p>;
  if (!film) return <p>Film not found.</p>;

  return (
    <div className="container mt-3">
      {/* Back button */}
      <button className="btn btn-secondary mb-3" onClick={() => navigate(-1)}>
        &larr; Back
      </button>

      {/* Film header */}
      <h1>{film.title}</h1>
      <p><strong>Episode:</strong> {film.episode_id}</p>
      <p><strong>Director:</strong> {film.director}</p>
      <p><strong>Producer:</strong> {film.producer}</p>
      <p><strong>Release Date:</strong> {film.release_date}</p>

      {/* Opening crawl */}
      <p style={{ whiteSpace: "pre-line" }}>{film.opening_crawl}</p>

      {/* Counts */}
      <ul className="list-unstyled mb-3">
        <li><strong>Characters:</strong> {film.characters.length}</li>
        <li><strong>Planets:</strong> {film.planets.length}</li>
        <li><strong>Starships:</strong> {film.starships.length}</li>
        <li><strong>Vehicles:</strong> {film.vehicles.length}</li>
        <li><strong>Species:</strong> {film.species.length}</li>
      </ul>

      {/* Characters links */}
      {film.characters.length > 0 && (
        <div className="mb-3">
          <h5>Characters</h5>
          <ul>
            {film.characters.map((char) => (
              <li key={char.id}>
                <Link to={`/people/${char.id}`}>{char.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Planets, Starships, Vehicles, Species */}
      {film.planets.length > 0 && (
        <div className="mb-3">
          <h5>Planets</h5>
          <ul>
            {film.planets.map((planet) => (
              <li key={planet.id}>{planet.name}</li>
            ))}
          </ul>
        </div>
      )}

      {film.starships.length > 0 && (
        <div className="mb-3">
          <h5>Starships</h5>
          <ul>
            {film.starships.map((ship) => (
              <li key={ship.id}>{ship.name}</li>
            ))}
          </ul>
        </div>
      )}

      {film.vehicles.length > 0 && (
        <div className="mb-3">
          <h5>Vehicles</h5>
          <ul>
            {film.vehicles.map((vehicle) => (
              <li key={vehicle.id}>{vehicle.name}</li>
            ))}
          </ul>
        </div>
      )}

      {film.species.length > 0 && (
        <div className="mb-3">
          <h5>Species</h5>
          <ul>
            {film.species.map((s) => (
              <li key={s.id}>{s.name}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default FilmDetail;
