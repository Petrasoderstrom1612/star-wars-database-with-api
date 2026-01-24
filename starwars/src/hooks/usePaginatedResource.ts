// hooks/usePaginatedResource.ts
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { getResource } from "../services/StarWarsAPI"; 
// import { handleError } from "../utils/handleError";
import type { PaginatedResponse } from "../services/types";

export const usePaginatedResource = <T>(endpoint: string, initialPage = 1) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const page = Number(searchParams.get("page") ?? initialPage);
  const search = searchParams.get("search") || undefined;

  const [data, setData] = useState<T[]>([]);
  const [lastPage, setLastPage] = useState<number>(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      setError(null);

      try {
        const response: PaginatedResponse<T> = await getResource<T>(endpoint, page, search);
        setData(response.data);
        setLastPage(response.last_page);
      } catch (err) {
        // setError(handleError(err));
        console.log(err)
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, [endpoint, page, search]);

  const setPageParam = (newPage: number) => {
    setSearchParams({
      page: String(newPage),
      ...(search ? { search } : {}),
    });
  };

  const setSearchParam = (newQuery: string) => {
    setSearchParams({
      page: "1",
      ...(newQuery ? { search: newQuery } : {}),
    });
  };

  return { data, page, lastPage, search, loading, error, setPageParam, setSearchParam };
};
