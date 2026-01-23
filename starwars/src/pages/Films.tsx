import { useEffect, useState } from "react";
import { getFilms} from "../services/StarWarsAPI";
import type { Films } from "../services/types";
import { isJSendSuccess } from "../services/types";
import {handleError} from "../utils/handleError"

const Films = () => {
  const [film, setFilms] = useState<Films[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const loadFilms = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await getFilms(); 

        if (isJSendSuccess(response)) { 
          setFilms(response.data); 
        } else if (response.status === "fail") {
          setError("Validation failed"); 
        } else { 
          setError(response.message); 
        }
      } catch (err) {
        setError(handleError(err)); 
      } finally {
        setLoading(false);
      }
    };

    loadFilms();
  }, []);

  console.log(film, error, loading)

  return(<h1>hi</h1>)
};

export default Films
