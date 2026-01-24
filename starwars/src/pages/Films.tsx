import { Link } from "react-router-dom";
import type { Films } from "../services/types";
import { ListPage } from "../components/ListPage";

const FilmsPage = () => (
  <ListPage<Films>
    endpoint="/films"
    placeholder="Search films"
    renderItem={(film) => (
      <div key={film.id} className="col-12 col-md-6 col-lg-4">
        <div className="card h-100">
          {film.image_url && <img src={film.image_url} className="card-img-top" alt={film.title} />}
          <div className="card-body d-flex flex-column">
            <Link to={`/films/${film.id}`} className="btn btn-outline-primary mt-auto">Read More</Link>
            <h5 className="card-title">{film.title}</h5>
            <p><strong>Episode:</strong> {film.episode_id}</p>
            <p><strong>Director:</strong> {film.director}</p>
            <p><strong>Producer:</strong> {film.producer}</p>
            <p><strong>Release Date:</strong> {film.release_date}</p>
          </div>
        </div>
      </div>
    )}
  />
);

export default FilmsPage;
