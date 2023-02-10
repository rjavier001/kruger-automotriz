import axios from "axios";
import queryString from "query-string";

// const baseURL = "http://localhost:8080/api/";
const baseURL = "https://cc60-2800-bf0-2a7-118a-3882-c038-54a4-96a.sa.ngrok.io/api/"

const publicClient = axios.create({
  baseURL,
  paramsSerializer: {
    encode: (params) => queryString.stringify(params),
  },
});

publicClient.interceptors.request.use(async (config) => {
  return {
    ...config,
    headers: {
      "Content-Type": "application/json",
    },
  };
});

publicClient.interceptors.response.use(
  (response) => {
    if (response && response.data) return response.data;
    return response;
  },
  (err) => {
    throw err.response.data;
  }
);

export default publicClient;
