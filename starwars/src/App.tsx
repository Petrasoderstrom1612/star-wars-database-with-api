import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout"
import {
  People,
  PersonDetail,
  FilmDetail,
  Startpage,
  FilmsPage,
  NotFound
} from "./pages";

const App = () => {
  console.log('ENV:', import.meta.env)
console.log('BASE:', import.meta.env.VITE_API_BASEURL)
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout/>}>
          <Route index element={<Startpage/>}/>
          <Route path="/people" element={<People/>}/>
          <Route path="/people/:id" element={<PersonDetail/>}/>
          <Route path="/films" element={<FilmsPage/>}/>
          <Route path="/films/:id" element={<FilmDetail/>}/>
          <Route path="*" element={<NotFound/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;

//Films✅, People✅, Planets✅, Species ✅, Starships, Vehicles