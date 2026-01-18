import { NavLink, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <header className="d-flex flex-wrap gap-3 p-3 bg-light">
        <NavLink to="/people" className="text-decoration-none fw-semibold">
          People
        </NavLink>

        <NavLink to="/films" className="text-decoration-none fw-semibold">
          Films
        </NavLink>
      </header>
      <Outlet />
    </>
  );
};

export default Layout;
