import BackBtnDetailPage from "../components/BackBtnDetailPage"
import {handleError} from "../utils/handleError"
import Loader from "../components/Loader";
import { useFetch } from "../hooks/useFetch";
import { useParams, Link} from "react-router-dom";
import type { Specie } from "../services/types";

const SpeciesDetail = () => {
  const { id } = useParams<{ id: string }>();

  const { data: specie, loading, error } = useFetch<Specie>(`/species/${id}`);

  if (loading) { return <Loader />;}
  if (error) return <p className="text-danger" role="alert">{handleError(error)}</p>;
  if (!specie) return <p>Person not found.</p>;

  return (
    <div className="container mt-3">
      <BackBtnDetailPage/>

      <h1 className="mb-3">{specie.name}</h1>

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
      </ul>
      {specie.people && specie.people.length > 0 && (
        <div className="mb-3">
          <h5>People ({specie.people.length})</h5>
          <ul>
            {specie.people.map((person) => (
              <li key={person.id}>
                <Link to={`/people/${person.id}`}>{person.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      )}

      {specie.films.length > 0 && (
        <div className="mb-3">
          <h5>Films ({specie.films.length})</h5>
          <ul>
            {specie.films.map((film) => (
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

export default SpeciesDetail
