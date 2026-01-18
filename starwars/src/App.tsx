import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout"
import People from "./pages/People";
import PersonDetail from "./pages/PersonDetail";
import Startpage from "./pages/Startpage";
import Films from "./pages/Films";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout/>}>
        <Route path="/" element={<Startpage/>}/>
        <Route path="/people" element={<People/>}/>
        <Route path="/people/:id" element={<PersonDetail/>}/>
        <Route path="/films" element={<Films/>}/>
        {/*  <Route path="/films/:id" element={<FilmDetail/>}/> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
