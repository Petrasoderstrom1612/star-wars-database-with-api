import { NavLink, Outlet } from "react-router-dom";

const navItems = [
  { path: "/", name: "Home" },
  { path: "/films", name: "Films" },
  { path: "/people", name: "People" },
  { path: "/planets", name: "Planets" },
  { path: "/species", name: "Species" },
  { path: "/starships", name: "Starships" },
  { path: "/vehicles", name: "Vehicles" },
];

const Layout = () => {
  return (
    <>
    <header className="d-flex flex-wrap gap-3 p-3 bg-light">
      {navItems.map(({ path, name }) => (
        <NavLink key={path} to={path} className="text-decoration-none fw-semibold">{name}
        </NavLink>
      ))}
    </header>
      <Outlet />
    </>
  );
};

export default Layout;
