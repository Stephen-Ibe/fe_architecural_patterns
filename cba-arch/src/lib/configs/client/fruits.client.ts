import axios, { InternalAxiosRequestConfig, AxiosError } from "axios";
import Client from "./client";

const FRUITS_API_BASE_URL = "https://www.fruityvice.com/api/fruit/";

const fruitInstance = axios.create({
  baseURL: FRUITS_API_BASE_URL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

fruitInstance.interceptors.request.use(
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

export const fruitClient = new Client(fruitInstance);

export default fruitInstance;
