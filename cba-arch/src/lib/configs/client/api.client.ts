import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

export default class ApiClient {
  private axiosInstance: AxiosInstance;

  constructor(axiosInstance: AxiosInstance) {
    this.axiosInstance = axiosInstance;
  }

  async get<T>(url: string, options?: AxiosRequestConfig<unknown>): Promise<T> {
    const { data }: AxiosResponse<T> = await this.axiosInstance.get(
      url,
      options
    );
    return data;
  }

  async post<T, P = unknown>(
    url: string,
    payload?: P,
    options?: AxiosRequestConfig<unknown>
  ): Promise<T> {
    const { data }: AxiosResponse<T> = await this.axiosInstance.post(
      url,
      payload,
      options
    );
    return data;
  }

  async put<T, P = unknown>(
    url: string,
    payload?: P,
    options?: AxiosRequestConfig<unknown>
  ): Promise<T> {
    const { data }: AxiosResponse<T> = await this.axiosInstance.put(
      url,
      payload,
      options
    );
    return data;
  }

  async delete<T>(
    url: string,
    options?: AxiosRequestConfig<unknown>
  ): Promise<T> {
    const { data }: AxiosResponse<T> = await this.axiosInstance.delete(
      url,
      options
    );
    return data;
  }

  async patch<T>(
    url: string,
    payload?: unknown,
    options?: AxiosRequestConfig<unknown>
  ): Promise<T> {
    const { data }: AxiosResponse<T> = await this.axiosInstance.patch(
      url,
      payload,
      options
    );
    return data;
  }
}
