import { useState, useEffect } from "react";
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
  productData: T | null;
  isLoading: boolean;
  error: Error | null;
}

const useProductDetailsFetch = (url: string): FetchState<Product> => {
  const [productData, setProductData] = useState<Product | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    let mounted = true;
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response: AxiosResponse<Product> = await axios.get(url);
        if (mounted) {
          setProductData(response.data);
        }
      } catch (error: unknown) {
        setError({ message: error });
      }
      setIsLoading(false);
    };

    fetchData();

    return () => {
      mounted = false;
    };
  }, [url]);

  return { productData, isLoading, error };
};

export default useProductDetailsFetch;
