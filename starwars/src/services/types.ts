/** PAGINATED RESPONSE**/
export interface PaginatedResponse<T> {
  current_page: number;
  data: T[];
  first_page_url: string;
  from: number;
  last_page: number;
  last_page_url: string;
  links: {
    url: string | null;
    label: string;
    active: boolean;
  }[];
  next_page_url: string | null;
  path: string;
  per_page: number;
  prev_page_url: string | null;
  to: number;
  total: number;
}

export interface PaginationProps {
  page: number;
  lastPage: number;
  setPage: (newPage: number) => void;
}

/*CATEGORIES*/
type Counts<K extends string> = { [P in `${K}_count`]: number };
type IdNameArrOfObj<K extends string> = { [P in K]: { id: number; name: string }[] };
type IdTitleArrOfObj<K extends string> = { [P in K]: { id: number; title: string }[] };
type IdNameObj = { id: number; name: string };
type IdTitleObj = { id: number; title: string };

/** FILMS DATA **/
type FilmCommon = {
  id: number;
  title: string;
  episode_id: string;
  opening_crawl: string;
  director: string;
  producer: string;
  release_date: string;
  image_url: string;
  created: string;
  edited: string;
};

export type Films = FilmCommon &
  Counts<"characters" | "planets" | "starships" | "vehicles" | "species">;

export type Film = FilmCommon &
  IdNameArrOfObj<"characters" | "planets" | "starships" | "vehicles" | "species">;

/** PEOPLE **/
type PeopleCommon = {
  id: number;
  name: string;
  birth_year: string;
  eye_color: string;
  hair_color: string;
  height: string;
  mass: string;
  skin_color: string;
  wiki_link: string;
  image_url: string;
  affiliations: string[];
  homeworld: IdNameObj;
  created: string;
  edited: string;
};

export type People = PeopleCommon &
  Counts<"films" | "species" | "starships" | "vehicles">;

export type Person = PeopleCommon &
  IdNameArrOfObj<"residents" | "species" | "starships" | "vehicles"> &
  IdTitleArrOfObj<"films">;

/** PLANETS **/
type PlanetsCommon = {
  id: number;
  name: string;
  rotation_period: string;
  orbital_period: string;
  diameter: string;
  climate: string;
  gravity: string;
  terrain: string;
  surface_water: string;
  population: string;
  created: string;
  edited: string;
};

export type Planets = PlanetsCommon &
  Counts<"residents" | "films">;

export type Planet = PlanetsCommon & {
  residents: Omit<PeopleCommon, "homeworld">[];
} & IdTitleArrOfObj<"films">;

/** SPECIES **/
export type SpeciesCommon = {
  id: number;
  name: string;
  classification: string;
  designation: string;
  average_height: string;
  average_lifespan: string;
  eye_colors: string;
  hair_colors: string;
  skin_colors: string;
  language: string;
  created: string;
  edited: string;
  homeworld: IdNameObj | null;
};

export type Species = SpeciesCommon &
  Counts<"people" | "films">  & {
};

export type Specie = SpeciesCommon & { 
  people: IdNameObj[];
  films: IdTitleObj[];
};

/** STARSHIPS **/
/** VEHICLES **/
