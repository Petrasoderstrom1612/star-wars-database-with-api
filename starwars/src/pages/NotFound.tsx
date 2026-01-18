import { Link } from "react-router-dom"

const NotFound = () => {
  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100 px-3">
      <div className="text-center">
        <h1 className="mb-4 fs-3 fs-md-1">
          Sorry, the page you were looking for was not found.
        </h1>

        <Link to="/" className="btn btn-primary">
          Return to Home
        </Link>
      </div>
    </div>
  )
}

export default NotFound