import axios from "axios";
import type {PaginatedResponse} from "./types.ts"


const BASE_URL = import.meta.env.VITE_API_BASEURL 
console.log(BASE_URL)

const instance = axios.create({
	baseURL: BASE_URL,
	timeout: 10000,
	headers: {
		Accept: "application/json",
		"Content-Type": "application/json",
	},
});

export const get = async <T>(endpoint: string) => {
	const res = await instance.get<T>(endpoint);
    console.log(res.data)
	return res.data;
}

export const getResource = async <T>(endpoint: string, page: number, search?: string): Promise<PaginatedResponse<T>> => {
  const params = new URLSearchParams();

  params.set("page", page.toString());
  if (search) params.set("search", search);

  return get<PaginatedResponse<T>>(
    `${endpoint}?${params.toString()}`
  );
};
