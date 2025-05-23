import axios, {
  AxiosError,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";
import ApiClient from "./api.client";

const API_BASE_URL = "https://jsonplaceholder.typicode.com/";

const instance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

instance.interceptors.request.use(
  (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error: AxiosError): Promise<AxiosError> => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  async (response: AxiosResponse): Promise<AxiosResponse> => {
    return Promise.resolve(response);
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

export const clientOne = new ApiClient(instance);

export default instance;
