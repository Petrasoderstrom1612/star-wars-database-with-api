type BaseEntity = {
  id: number;
  name: string;
};

/** FILMS DATA **/
export interface FilmsCommon {
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

export interface Films extends FilmsCommon{
  characters_count: number,
  planets_count: number,
  starships_count: number,
  vehicles_count: number,
  species_count: number    
}

export interface Film extends FilmsCommon{
  characters: BaseEntity[];
  planets: BaseEntity[];
  starships: BaseEntity[];
  vehicles: BaseEntity[];
  species: BaseEntity[];
}

/** PEOPLE DATA **/
export type PeopleCommon = {
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
  created: string; 
  edited: string; 
  homeworld: { id: number; name: string };
}

export type People = PeopleCommon & {
  films_count: number;
  species_count: number;
  starships_count: number;
  vehicles_count: number;
}

export type Person = PeopleCommon & {
  films:  BaseEntity[];
  species:  BaseEntity[];
  starships:  BaseEntity[];
  vehicles:  BaseEntity[];
}

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