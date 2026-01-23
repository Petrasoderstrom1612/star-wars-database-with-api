import { useEffect, useState } from "react";
import { getFilms} from "../services/StarWarsAPI";
import type { Films } from "../services/types";
import {handleError} from "../utils/handleError"

const FilmsPage = () => {
  const [films, setFilms] = useState<Films[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  console.log("error", error,"loading", loading)

useEffect(() => {
  const loadFilms = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await getFilms(); 
      setFilms(response.data); 
    } catch (err) {
      setError(handleError(err));
    } finally {
      setLoading(false);
    }
  };

  loadFilms();
}, []);

    useEffect(() => {
    console.log("Updated films state:", films);
    console.log("Error state:", error);
    console.log("Loading state:", loading);
  }, [films, error, loading]);
  
  return <h1>{films[0]?.title ?? "Loading..."}</h1>;
};



export default FilmsPage
