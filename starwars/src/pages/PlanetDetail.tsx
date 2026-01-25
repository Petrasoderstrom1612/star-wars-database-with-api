import BackBtnDetailPage from "../components/BackBtnDetailPage"
import {handleError} from "../utils/handleError"
import Loader from "../components/Loader";
import { useFetch } from "../hooks/useFetch";
import { useParams, Link} from "react-router-dom";
import type { Planet } from "../services/types";

const PlanetDetail = () => {
  const { id } = useParams<{ id: string }>();

  const { data: planet, loading, error } = useFetch<Planet>(`/planets/${id}`);

  if (loading) { return <Loader />;}
  if (error) return <p className="text-danger" role="alert">{handleError(error)}</p>;
  if (!planet) return <p>Person not found.</p>;

  return (
    <div className="container mt-3">
      <BackBtnDetailPage/>

      <h1 className="mb-3">{planet.name}</h1>

      <ul className="list-unstyled mb-3">
        <li><strong>Rotation Period:</strong> {planet.rotation_period}</li>
        <li><strong>Orbital Period:</strong> {planet.orbital_period}</li>
        <li><strong>Diameter:</strong> {planet.diameter}</li>
        <li><strong>Climate:</strong> {planet.climate}</li>
        <li><strong>Gravity:</strong> {planet.gravity}</li>
        <li><strong>Terrain:</strong> {planet.terrain}</li>
        <li><strong>Surface Water:</strong> {planet.surface_water}</li>
        <li><strong>Population:</strong> {planet.population}</li>
      </ul>

      {planet.residents && planet.residents.length > 0 && (
        <div className="mb-3">
          <h5>Residents ({planet.residents.length})</h5>
          <ul>
            {planet.residents.map((resident) => (
              <li key={resident.id}>
                <Link to={`/people/${resident.id}`}>{resident.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      )}

      {planet.films.length > 0 && (
        <div className="mb-3">
          <h5>Films ({planet.films.length})</h5>
          <ul>
            {planet.films.map((film) => (
              <li key={film.id}>
                <Link to={`/films/${film.id}`}>{film.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      )}

    </div>
  );
};
export default PlanetDetail