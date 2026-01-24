import { Link } from "react-router-dom";
import type { People } from "../services/types";
import { ListPage } from "../components/ListPage";

const People = () => (
  <ListPage<People>
    endpoint="/people"
    placeholder="Search people"
    renderItem={(person) => (
      <div key={person.id} className="col-12 col-md-6 col-lg-4 mb-4">
        <div className="card h-100">
          {person.image_url && (
            <div className="overflow-hidden" style={{ height: "600px" }}>
              <img
                src={person.image_url}
                className="card-img-top w-100 h-100"
                alt={person.name}
                style={{ objectFit: "cover", objectPosition: "top" }}
              />
            </div>
          )}
          <div className="card-body d-flex flex-column">
            <h5 className="card-title">{person.name}</h5>
            <ul className="list-unstyled mb-3">
              <li><strong>Birthdate:</strong> {person.birth_year}</li>
              <li><strong>Eye color:</strong> {person.eye_color}</li>
              <li><strong>Hair color:</strong> {person.hair_color}</li>
              <li><strong>Height:</strong> {person.height} cm</li>
              <li><strong>Mass:</strong> {person.mass} kg</li>
              <li><strong>Skin color:</strong> {person.skin_color}</li>
              <li><strong>Homeworld:</strong> {person.homeworld.name}</li>
              {person.affiliations.length > 0 && (
                <li><strong>Affiliations:</strong> {person.affiliations.join(", ")}</li>
              )}
            </ul>
            <div className="mt-auto d-flex flex-column gap-2">
              {person.wiki_link && (
                <a href={person.wiki_link} target="_blank" rel="noopener noreferrer">
                  Wikipedia link dedicated to {person.name}
                </a>
              )}
              <Link to={`/people/${person.id}`} className="btn btn-outline-primary">
                Read More
              </Link>
            </div>
          </div>
        </div>
      </div>
    )}
  />
);

export default People
