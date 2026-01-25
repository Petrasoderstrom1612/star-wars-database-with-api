import { Link } from "react-router-dom";
import type { Planets } from "../services/types";
import { ListPage } from "../components/ListPage";

const PlanetsPage = () => (
  <ListPage<Planets>
    endpoint="/planets"
    placeholder="Search planets"
    renderItem={(planet) => (
      <div key={planet.id} className="col-12 col-md-6 col-lg-4 mb-4">
        <div className="card h-100">
          <div className="card-body d-flex flex-column">
            <h5 className="card-title">{planet.name}</h5>
            <ul className="list-unstyled mb-3">
              <li><strong>Rotation Period:</strong> {planet.rotation_period}</li>
              <li><strong>Orbital Period:</strong> {planet.orbital_period}</li>
              <li><strong>Diameter:</strong> {planet.diameter}</li>
              <li><strong>Climate:</strong> {planet.climate}</li>
              <li><strong>Gravity:</strong> {planet.gravity}</li>
              <li><strong>Terrain:</strong> {planet.terrain}</li>
              <li><strong>Surface Water:</strong> {planet.surface_water}</li>
              <li><strong>Population:</strong> {planet.population}</li>
              <li><strong>Residents:</strong> {planet.residents_count}</li>
              <li><strong>Appears in Films:</strong> {planet.films_count}</li>
            </ul>
            <Link
              to={`/planets/${planet.id}`}
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

export default PlanetsPage;
