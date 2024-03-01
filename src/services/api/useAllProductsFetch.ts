/* eslint-disable @typescript-eslint/no-explicit-any */
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios, { AxiosResponse, AxiosError } from "axios";

export interface Product {
  id: number;
  title: string;
  image: string;
  price: number;
  category: string;
  description: string;
}

interface Error {
  message: string;
}

interface FetchState<T> {
  data: T | null;
  isLoading: boolean;
  error: Error | null;
  fetchData: (url: string) => void;
}

const useAllProductsFetch = <T>(): FetchState<T> => {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);
  const navigate = useNavigate();

  const fetchData = async (url: string) => {
    setIsLoading(true);
    try {
      const response: AxiosResponse<T> = await axios.get(url);
      setData(response.data);
    } catch (error) {
      handleAxiosError(error);
    }
    setIsLoading(false);
  };

  const handleAxiosError = (error: AxiosError | any) => {
    if (error.response) {
      const status = error.response.status;
      if (status === 404) {
        navigate("/404");
      } else if (status === 500) {
        navigate("/500");
      } else {
        setError({ message: `Server error: ${status}` });
      }
    } else if (error.request) {
      // The request was made but no response was received
      setError({ message: "No response from server" });
    } else {
      // Something happened in setting up the request that triggered an error
      setError({ message: "Request failed" });
    }
  };

  return { data, isLoading, error, fetchData };
};

export default useAllProductsFetch;
