import { DotLoader } from "react-spinners";

const Loader = () => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center min-vh-100">
      <h2 aria-live="polite" className="mb-3">
        Loading...
      </h2>
      <DotLoader color="var(--bs-primary)"/>
    </div>
  );
};

export default Loader;
