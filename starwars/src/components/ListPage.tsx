import { handleError } from "../utils/handleError";
import Loader  from "./Loader"
import { useState, type JSX } from "react";
import { usePaginatedResource } from "../hooks/usePaginatedResource";
import { SearchBar } from "./SearchBar";
import { Pagination } from "./Pagination";

interface ListPageProps<T> {
  endpoint: string;
  renderItem: (item: T) => JSX.Element;
  placeholder?: string;
}

export const ListPage = <T,>({ endpoint, renderItem, placeholder }: ListPageProps<T>) => {
  const {
    data,
    page,
    lastPage,
    search,
    loading,
    error,
    setPageParam,
    setSearchParam,
  } = usePaginatedResource<T>(endpoint);

  const [input, setInput] = useState(search || "");

  const handleSubmit = () => setSearchParam(input);

  if (loading) { return <Loader />;}
   if (error) return <p className="text-danger" role="alert">{handleError(error)}</p>;

  return (
    <>
      <SearchBar value={input} onChange={setInput} onSubmit={handleSubmit} placeholder={placeholder} />

      <div className="row g-3">
        {data.map(renderItem)}
      </div>

      <Pagination page={page} lastPage={lastPage} setPage={setPageParam} />
    </>
  );
};
