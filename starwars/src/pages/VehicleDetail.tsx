import BackBtnDetailPage from "../components/BackBtnDetailPage"
import {handleError} from "../utils/handleError"
import Loader from "../components/Loader";
import { useFetch } from "../hooks/useFetch";
import { useParams, Link} from "react-router-dom";
import type { Vehicle } from "../services/types";

const VehicleDetail = () => {
  const { id } = useParams<{ id: string }>();

  const { data: vehicle, loading, error } = useFetch<Vehicle>(`/vehicles/${id}`);

  if (loading) { return <Loader />;}
  if (error) return <p className="text-danger" role="alert">{handleError(error)}</p>;
  if (!vehicle) return <p>Vehicle not found.</p>;

  return (
   <div className="container mt-3">
      <BackBtnDetailPage/>

      <h5 className="card-title">{vehicle.name}</h5>
      <ul className="list-unstyled mb-3 small">
        <li><strong>Model:</strong> {vehicle.model}</li>
        <li><strong>Class:</strong> {vehicle.vehicle_class}</li>
        <li><strong>Manufacturer:</strong> {vehicle.manufacturer}</li>
        <li><strong>Cost:</strong> {vehicle.cost_in_credits === "unknown" ? "Unknown" : `${vehicle.cost_in_credits} credits`}</li>
        <li><strong>Length:</strong> {vehicle.length === "unknown" ? "Unknown" : `${vehicle.length} m`}</li>
        <li><strong>Crew:</strong> {vehicle.crew === "unknown" ? "Unknown" : `${vehicle.crew} crew member${vehicle.crew !== "1" ? "s" : ""}`}</li>
        <li><strong>Passengers:</strong> {vehicle.passengers === "unknown" ? "Unknown" : `${vehicle.passengers} passenger${vehicle.passengers !== "1" ? "s" : ""}`}</li>
        <li><strong>Max Speed:</strong> {vehicle.max_atmosphering_speed === "unknown" ? "Unknown" : `${vehicle.max_atmosphering_speed} km/h`}</li>
        <li><strong>Cargo:</strong> {vehicle.cargo_capacity === "unknown" ? "Unknown" : `${vehicle.cargo_capacity} kg`}</li>
        <li><strong>Consumables:</strong> {vehicle.consumables}</li>
      </ul>

      {vehicle.pilots && vehicle.pilots?.length > 0 && (
        <div className="mb-3">
          <h5>Pilots ({vehicle.pilots.length})</h5>
          <ul>
            {vehicle.pilots.map((person) => (
              <li key={person.id}>
                <Link to={`/people/${person.id}`}>{person.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      )}

      {vehicle.films?.length > 0 && (
        <div className="mb-3">
          <h5>Films ({vehicle.films.length})</h5>
          <ul>
            {vehicle.films.map((film) => (
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

export default VehicleDetail