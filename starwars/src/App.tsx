import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout"
import {
  People,
  PersonDetail,
  FilmDetail,
  Startpage,
  Films,
  NotFound
} from "./pages";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout/>}>
        <Route path="/" element={<Startpage/>}/>
        <Route path="/people" element={<People/>}/>
        <Route path="/people/:id" element={<PersonDetail/>}/>
        <Route path="/films" element={<Films/>}/>
        <Route path="/films/:id" element={<FilmDetail/>}/>
        <Route path="*" element={<NotFound/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;

//Films✅, People✅, Planets✅, Species ✅, Starships, Vehicles