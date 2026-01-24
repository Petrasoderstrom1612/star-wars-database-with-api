import { Outlet } from "react-router-dom";

const Startpage = () => {
  return (
    <>
      <section
        className="position-relative d-flex align-items-center text-center text-light"
        style={{
          minHeight: "70vh",
          backgroundImage:
            "url('https://images.unsplash.com/photo-1547700055-b61cacebece9')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Dark overlay */}
        <div
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
        />

        {/* Content */}
        <div className="container position-relative">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <h1 className="display-4 fw-bold">
                Star Wars Encyclopedia
              </h1>
              <p className="lead mt-3">
                Explore characters, films, planets, species, starships and vehicles
                from a galaxy far, far away.
              </p>
            </div>
          </div>
        </div>
      </section>

      <main className="container my-5">
        <Outlet />
      </main>
    </>
  );
};

export default Startpage;
