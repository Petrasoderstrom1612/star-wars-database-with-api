import { Link } from "react-router-dom";
import type { Species } from "../services/types";
import { ListPage } from "../components/ListPage";

const SpeciesPage = () => (
  <ListPage<Species>
    endpoint="/species"
    placeholder="Search species"
    renderItem={(specie) => (
      <div key={specie.id} className="col-12 col-md-6 col-lg-4 mb-4">
        <div className="card h-100">
          <div className="card-body d-flex flex-column">
            <h5 className="card-title">{specie.name}</h5>

            <ul className="list-unstyled mb-3">
              <li><strong>Classification:</strong> {specie.classification}</li>
              <li><strong>Designation:</strong> {specie.designation}</li>
              <li><strong>Average Height:</strong> {specie.average_height} cm</li>
              <li><strong>Average Lifespan:</strong> {specie.average_lifespan} years</li>
              <li><strong>Eye Colors:</strong> {specie.eye_colors}</li>
              <li><strong>Hair Colors:</strong> {specie.hair_colors}</li>
              <li><strong>Skin Colors:</strong> {specie.skin_colors}</li>
              <li><strong>Language:</strong> {specie.language}</li>
              {specie.homeworld?.id && specie.homeworld?.name && (
                <li>
                  <strong>Homeworld:</strong>{" "}
                  <Link to={`/planets/${specie.homeworld.id}`}>{specie.homeworld.name}</Link>
                </li>
              )}
              <li><strong>People Count:</strong> {specie.people_count}</li>
              <li><strong>Films Count:</strong> {specie.films_count}</li>
            </ul>

            <Link to={`/species/${specie.id}`} className="btn btn-outline-primary mt-3">
              Read More
            </Link>
          </div>
        </div>
      </div>
    )}
  />
);


export default SpeciesPage;
