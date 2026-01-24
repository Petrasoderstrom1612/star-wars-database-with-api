import { NavLink, Outlet } from "react-router-dom";

const navItems = [
  { path: "/people", name: "People" },
  { path: "/films", name: "Films" },
  { path: "/planets", name: "Planets" },
  { path: "/species", name: "Species" },
  { path: "/starships", name: "Starships" },
  { path: "/vehicles", name: "Vehicles" },
];

const Layout = () => {
  return (
    <div className="bg-dark text-light min-vh-100">
      <header className="d-flex justify-content-center flex-wrap gap-3 p-3 bg-dark">
        {navItems.map(({ path, name }) => (
          <NavLink
            key={path}
            to={path}
            className={({ isActive }) =>
              `text-decoration-none fw-semibold ${isActive ? "text-primary" : "text-light"}`
            }
          >
            {name}
          </NavLink>
        ))}
      </header>

      <main className="py-3 px-3 container" role="main">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;

