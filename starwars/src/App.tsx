import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout"
import {
  FilmDetail,
  FilmsPage,
  NotFound,
  People,
  PersonDetail,
  PlanetsPage,
  PlanetDetail,
  SpeciesPage,
  SpeciesDetail,
  StarshipsPage,
  StarshipDetail,
  Startpage,
  VehiclesPage,
  VehicleDetail,
} from "./pages/index.tsx";

const App = () => {
  console.log('ENV:', import.meta.env)
console.log('BASE:', import.meta.env.VITE_API_BASEURL)
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout/>}>
          <Route index element={<Startpage/>}/>
            <Route path="/people" element={<People />} />
            <Route path="/people/:id" element={<PersonDetail />} />
            <Route path="/films" element={<FilmsPage />} />
            <Route path="/films/:id" element={<FilmDetail />} />
            <Route path="/planets" element={<PlanetsPage />} />
            <Route path="/planets/:id" element={<PlanetDetail />} />
            <Route path="/species" element={<SpeciesPage />} />
            <Route path="/species/:id" element={<SpeciesDetail />} />
            <Route path="/starships" element={<StarshipsPage />} />
            <Route path="/starships/:id" element={<StarshipDetail />} />
            <Route path="/vehicles" element={<VehiclesPage />} />
            <Route path="/vehicles/:id" element={<VehicleDetail />} />
            <Route path="*" element={<NotFound/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;

//Films✅, People✅, Planets✅, Species ✅, Starships, Vehicles