import axios from "axios";
import type {JSendResponse, Films} from "./types.ts"

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

const get = async <T>(endpoint: string) => {
	const res = await instance.get<T>(endpoint);
    console.log(res.data)
	return res.data;
}

export const getFilms = async () => {
	return get<JSendResponse<Films[]>>("/films");
}

getFilms()

// const searchWord  = async () => {
// 	const axiosResponse = await axios.post<SearchResponse>("/");

// 	const res = axiosResponse.data;
//  //     ^?

// 	if (res.status === "success") {
// 		console.log(res);  // JSendSuccessResponse<Order>
// 		console.log("Data:", res.data);  // Order
// 		return res;
// 	} else if (res.status === "fail") {
// 		console.log(res);  // JSendFailResponse
// 		console.log("Data:", res.data);  // ValidationError[]
// 		return res;
// 	} else {
// 		console.log(res);  // JSendErrorResponse
// 		console.log("Message:", res.message);
// 	}
// }

// searchWord();