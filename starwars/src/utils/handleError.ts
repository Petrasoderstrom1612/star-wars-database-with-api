import { AxiosError } from "axios";

export const handleError = (err: unknown): string => {
  if (err instanceof AxiosError) {
    console.log("Network error, response:", err);
    return "Network error";
  } 
  else if (err instanceof Error) {
    console.log(err);
    return err.message;
  } 
  else {
    console.log("Something unexpected happened that does not have to do with the network.", err);
    return "We could not find what you were looking for.";
  }
};
