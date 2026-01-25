import { Link } from "react-router-dom";
import type { Starships } from "../services/types";
import { ListPage } from "../components/ListPage";

const StarshipsPage = () => (
  <ListPage<Starships>
    endpoint="/starships"
    placeholder="Search starships"
    renderItem={(starship) => (
      <div key={starship.id} className="col-12 col-md-6 col-lg-4 mb-4">
        <div className="card h-100">
          <div className="card-body d-flex flex-column">
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
            <li><strong>Pilots:</strong> {starship.pilots_count} pilot{starship.pilots_count !== 1 && "s"}</li>
            <li><strong>Films:</strong> {starship.films_count} film{starship.films_count !== 1 && "s"}</li>
          </ul>

          <Link
            to={`/starships/${starship.id}`}
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

export default StarshipsPage
