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

            <ul className="list-unstyled mb-3">
              <li><strong>Model:</strong> {vehicle.model}</li>
              <li><strong>Class:</strong> {vehicle.vehicle_class}</li>
              <li><strong>Manufacturer:</strong> {vehicle.manufacturer}</li>
              <li><strong>Cost:</strong> {vehicle.cost_in_credits === "unknown" ? "Unknown" : `${vehicle.cost_in_credits} credits`}</li>
              <li><strong>Length:</strong> {vehicle.length}</li>
              <li><strong>Crew:</strong> {vehicle.crew}</li>
              <li><strong>Passengers:</strong> {vehicle.passengers}</li>
              <li><strong>Max Speed:</strong> {vehicle.max_atmosphering_speed}</li>
              <li><strong>Cargo Capacity:</strong> {vehicle.cargo_capacity}</li>
              <li><strong>Consumables:</strong> {vehicle.consumables}</li>
              <li><strong>Pilots Count:</strong> {vehicle.pilots_count}</li>
              <li><strong>Films Count:</strong> {vehicle.films_count}</li>
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

