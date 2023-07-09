import axios from "axios";
import { env } from "../env";

const axiosRequest = axios.create({
  baseURL: env.API_URL,
  headers: {
    // Authorization: `Token ${localStorage.getItem("ttt")}`,
  },
});

const updateAuthorizationHeader = () => {
  axiosRequest.defaults.headers.Authorization = `Token ${localStorage.getItem("ttt")}`;
};

export { axiosRequest, updateAuthorizationHeader };
