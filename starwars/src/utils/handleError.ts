import { AxiosError } from "axios";

export const handleError = (err: unknown) => {
	if (err instanceof AxiosError) {
		alert("Network error, response status: " + err.status);
		console.log("Network error, response:", err);
	} else if (err instanceof Error) {
		alert("Something went wrong: " + err.message);
		console.log(err);
	} else {
		alert("Something unexpected happend.");
		console.log("Something unexpected happend that does not have to do with the network.", err);
	}
}