import BackBtnDetailPage from "../components/BackBtnDetailPage"
import {handleError} from "../utils/handleError"
import Loader from "../components/Loader";
import { useFetch } from "../hooks/useFetch";
import { useParams, Link} from "react-router-dom";
import type { Starship } from "../services/types";

const StarshipDetail = () => {
  const { id } = useParams<{ id: string }>();

  const { data: starship, loading, error } = useFetch<Starship>(`/starships/${id}`);

  if (loading) { return <Loader />;}
  if (error) return <p className="text-danger" role="alert">{handleError(error)}</p>;
  if (!starship) return <p>Starship not found.</p>;

   return (
    <div className="container mt-3">
      <BackBtnDetailPage/>

      <h5 className="card-title">{starship.name}</h5>
      <ul className="list-unstyled mb-3 small">
        <li><strong>Model:</strong> {starship.model}</li>
        <li><strong>Class:</strong> {starship.starship_class}</li>
        <li><strong>Manufacturer:</strong> {starship.manufacturer}</li>
        <li><strong>Cost:</strong> {starship.cost_in_credits === "unknown" ? "Unknown" : `${starship.cost_in_credits} credits`}</li>
        <li><strong>Length:</strong> {starship.length === "unknown" ? "Unknown" : `${starship.length} m`}</li>
        <li><strong>Crew:</strong> {starship.crew}</li>
        <li><strong>Passengers:</strong> {starship.passengers}</li>
        <li><strong>Max Speed:</strong> {starship.max_atmosphering_speed === "unknown" ? "Unknown" : `${starship.max_atmosphering_speed} km/h`}</li>
        <li><strong>MGLT:</strong> {starship.MGLT === "unknown" ? "Unknown" : `${starship.MGLT} MGLT`}</li>
        <li><strong>Cargo:</strong> {starship.cargo_capacity === "unknown" ? "Unknown" : `${starship.cargo_capacity} kg`}</li>
        <li><strong>Consumables:</strong> {starship.consumables}</li>
      </ul>

      {starship.pilots && starship.pilots?.length > 0 && (
        <div className="mb-3">
          <h5>Pilots ({starship.pilots.length})</h5>
          <ul>
            {starship.pilots.map((person) => (
              <li key={person.id}>
                <Link to={`/people/${person.id}`}>{person.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      )}

      {starship.films?.length > 0 && (
        <div className="mb-3">
          <h5>Films ({starship.films.length})</h5>
          <ul>
            {starship.films.map((film) => (
              <li key={film.id}>
                <Link to={`/films/${film.id}`}>{film.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      )}

    </div>
  );
}

export default StarshipDetail
