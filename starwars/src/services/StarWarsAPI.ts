import axios from "axios";
import type {SearchResponse} from "./types.ts"

const BASE_URL = import.meta.env.VITE_API_BASEURL || "http://localhost:3000";

const instance = axios.create({
	baseURL: BASE_URL,
	timeout: 10000,
	headers: {
		Accept: "application/json",
		"Content-Type": "application/json",
	},
});

const post = async <Payload = never, Response = unknown>(
  endpoint: string,
  data?: Payload
) => {
  const res = await instance.post<Response>(endpoint, data);
  return res.data;
};


const searchWord = async () => {
	const res = await post<never, SearchResponse>("/");

	if (res.status === "success") {
		console.log(res);  // JSendSuccessResponse<Order>
		console.log("Data:", res.data);  // Order
		return res;
	} else if (res.status === "fail") {
		console.log(res);  // JSendFailResponse
		console.log("Data:", res.data);  // ValidationError[]
		return res;
	} else {
		console.log(res);  // JSendErrorResponse
		console.log("Message:", res.message);
	}
}
searchWord();