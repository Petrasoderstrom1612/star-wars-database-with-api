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
     
      <button className="btn btn-secondary mb-3" onClick={() => navigate(-1)}>
        &larr; Back
      </button>

      <h1>{film.title}</h1>
      <p><strong>Episode:</strong> {film.episode_id}</p>
      <p><strong>Director:</strong> {film.director}</p>
      <p><strong>Producer:</strong> {film.producer}</p>
      <p><strong>Release Date:</strong> {film.release_date}</p>

      <p style={{ whiteSpace: "pre-line" }}>{film.opening_crawl}</p>

      <ul className="list-unstyled mb-3">
        <li><strong>Characters:</strong> {film.characters.length}</li>
        <li><strong>Planets:</strong> {film.planets.length}</li>
        <li><strong>Starships:</strong> {film.starships.length}</li>
        <li><strong>Vehicles:</strong> {film.vehicles.length}</li>
        <li><strong>Species:</strong> {film.species.length}</li>
      </ul>

      {film.characters.length > 0 && (
        <div className="mb-3">
          <h5>Characters</h5>
          <ul>
            {film.characters.map((character) => (
              <li key={character.id}>
                <Link to={`/people/${character.id}`}>{character.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      )}

      {film.planets.length > 0 && (
        <div className="mb-3">
          <h5>Planets</h5>
          <ul>
            {film.planets.map((planet) => (
              <li key={planet.id}>
                <Link to={`/planets/${planet.id}`}>{planet.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      )}

      {film.starships.length > 0 && (
        <div className="mb-3">
          <h5>Starships</h5>
          <ul>
            {film.starships.map((starship) => (
              <li key={starship.id}>
                <Link to={`/starships/${starship.id}`}>{starship.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      )}

      {film.vehicles.length > 0 && (
        <div className="mb-3">
          <h5>Vehicles</h5>
          <ul>
            {film.vehicles.map((vehicle) => (
              <li key={vehicle.id}>
                <Link to={`/vehicles/${vehicle.id}`}>{vehicle.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      )}

      {film.species.length > 0 && (
        <div className="mb-3">
          <h5>Species</h5>
          <ul>
            {film.species.map((species) => (
              <li key={species.id}>
                <Link to={`/species/${species.id}`}>{species.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default FilmDetail;
