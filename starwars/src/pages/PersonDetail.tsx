import BackBtnDetailPage from "../components/BackBtnDetailPage"
import {handleError} from "../utils/handleError"
import Loader from "../components/Loader";
import { useFetch } from "../hooks/useFetch";
import { useParams, Link} from "react-router-dom";
import type { Person } from "../services/types";

const PersonDetail = () => {
  const { id } = useParams<{ id: string }>();

  const { data: person, loading, error } = useFetch<Person>(`/people/${id}`);

  if (loading) { return <Loader />;}
  if (error) return <p className="text-danger" role="alert">{handleError(error)}</p>;
  if (!person) return <p>Person not found.</p>;

  return (
    <div className="container mt-3">
      <BackBtnDetailPage/>

      {person.image_url && (
        <div className="row mb-4">
          <div className="col-8 col-sm-6 col-md-4 col-lg-3">
            <img
              src={person.image_url}
              alt={person.name}
              className="img-fluid rounded shadow"
            />
          </div>
        </div>
      )}

      <h1 className="mb-3">{person.name}</h1>

      <ul className="list-unstyled mb-3">
              <li><strong>Birthdate:</strong> {person.birth_year}</li>
              <li><strong>Eye color:</strong> {person.eye_color}</li>
              <li><strong>Hair color:</strong> {person.hair_color}</li>
              <li><strong>Height:</strong> {person.height} cm</li>
              <li><strong>Mass:</strong> {person.mass} kg</li>
              <li><strong>Skin color:</strong> {person.skin_color}</li>
              <li><strong>Homeworld:</strong> {person.homeworld.name}</li>
              <li>
                <strong>Affiliations:</strong>{" "}
              </li>
                <span className="affiliations">{person.affiliations.join(", ")}</span>
            </ul>

      {person.homeworld && (
        <p>
          <strong>Homeworld:</strong>{" "}
          <Link to={`/planets/${person.homeworld.id}`}>
            {person.homeworld.name}
          </Link>
        </p>
      )}

      {person.films.length > 0 && (
        <div className="mb-3">
          <h5>Films ({person.films.length})</h5>
          <ul>
            {person.films.map((film) => (
              <li key={film.id}>
                <Link to={`/films/${film.id}`}>{film.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      )}

      {person.species.length > 0 && (
        <div className="mb-3">
          <h5>Species ({person.species.length})</h5>
          <ul>
            {person.species.map((species) => (
              <li key={species.id}>
                <Link to={`/species/${species.id}`}>{species.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      )}

      {person.starships.length > 0 && (
        <div className="mb-3">
          <h5>Starships ({person.starships.length})</h5>
          <ul>
            {person.starships.map((starship) => (
              <li key={starship.id}>
                <Link to={`/starships/${starship.id}`}>{starship.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      )}

      {person.vehicles.length > 0 && (
        <div className="mb-3">
          <h5>Vehicles ({person.vehicles.length})</h5>
          <ul>
            {person.vehicles.map((vehicle) => (
              <li key={vehicle.id}>
                <Link to={`/vehicles/${vehicle.id}`}>{vehicle.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default PersonDetail;
