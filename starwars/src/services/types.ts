type Counts<K extends string> = { [P in `${K}_count`]: number };
type References<K extends string> = { [P in K]: { id: number; name: string }[] };

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
  References<"characters" | "planets" | "starships" | "vehicles" | "species">;

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
  homeworld: { id: number; name: string };
  created: string;
  edited: string;
};

export type People = PeopleCommon &
  Counts<"films" | "species" | "starships" | "vehicles">;

export type Person = PeopleCommon &
  References<"films" | "species" | "starships" | "vehicles">;

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
    residents: Omit<PeopleCommon, "homeworld">[] 
};

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