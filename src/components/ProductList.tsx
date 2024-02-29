import React, { useEffect } from "react";
import ProductCard from "./ProductCard";
import useAllProductsFetch, {
  Product,
} from "../services/api/useAllProductsFetch";

const API_URL = "https://fakestoreapi.com/products";

const ProductList: React.FC = () => {
  const { data, isLoading, error, fetchData } =
    useAllProductsFetch<Product[]>();

  useEffect(() => {
    fetchData(API_URL);
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error || !data) {
    return <>Error: {error ? error.message : "Failed to fetch data"}</>;
  }

  return (
    <section className="flex flex-row gap-4 flex-wrap">
      {data.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </section>
  );
};

export default ProductList;
