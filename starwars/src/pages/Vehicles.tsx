import { Link } from "react-router-dom";
import type { Vehicles } from "../services/types";
import { ListPage } from "../components/ListPage";

const VehiclesPage = () => (
  <ListPage<Vehicles>
    endpoint="/vehicles"
    placeholder="Search vehicles"
    renderItem={(vehicle) => (
      <div key={vehicle.id} className="col-12 col-md-6 col-lg-4 mb-4">
        <div className="card h-100">
          <div className="card-body d-flex flex-column">
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
              <li><strong>Pilots:</strong> {vehicle.pilots_count} pilot{vehicle.pilots_count !== 1 && "s"}</li>
              <li><strong>Films:</strong> {vehicle.films_count} film{vehicle.films_count !== 1 && "s"}</li>
            </ul>

            <Link
              to={`/vehicles/${vehicle.id}`}
              className="btn btn-outline-primary mt-auto"
            >
              Read More
            </Link>
          </div>
        </div>
      </div>
    )}
  />
);

export default VehiclesPage;

