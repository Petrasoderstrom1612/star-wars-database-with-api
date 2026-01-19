/** FILM DATA **/
export interface FilmsCommon {
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
}

export interface Homeworld{
  id: number;
  name: string;    
}

export type Films = FilmsCommon & {
films_count: number;
  species_count: number;
  starships_count: number;
  vehicles_count: number;
  homeworld: Homeworld;
}

export type Film = FilmsCommon & {
  characters_count: number;
  planets_count: number;
  starships_count: number;
  vehicles_count: number;
  species_count: number;
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