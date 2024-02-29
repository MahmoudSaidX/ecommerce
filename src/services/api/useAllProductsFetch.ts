/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import axios, { AxiosResponse } from "axios";

export interface Product {
  id: number;
  title: string;
  image: string;
  price: number;
  category: string;
  description: string;
}

interface Error {
  message: unknown;
}

interface FetchState<T> {
  data: T | null;
  isLoading: boolean;
  error: Error | null;
  fetchData: any;
}

const useAllProductsFetch = <T>(): FetchState<T> => {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  const fetchData = async (url: string) => {
    setIsLoading(true);
    try {
      const response: AxiosResponse<T> = await axios.get(url);
      setData(response.data);
    } catch (error: unknown) {
      setError({ message: error });
    }
    setIsLoading(false);
  };

  return { data, isLoading, error, fetchData };
};

export default useAllProductsFetch;
