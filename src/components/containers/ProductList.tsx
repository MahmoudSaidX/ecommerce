import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import useAllProductsFetch, {
  Product,
} from "../../services/api/useAllProductsFetch";
import { useSelector } from "react-redux";
import { RootState } from "../../services/state/store";
import Shimmer from "../ui/Shimmer";

const API_URL = "https://fakestoreapi.com/products";

const ProductList: React.FC = () => {
  const { productSearch } = useSelector((state: RootState) => state.product);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const { data, isLoading, fetchData } = useAllProductsFetch<Product[]>();

  useEffect(() => {
    fetchData(API_URL);
  }, []);

  useEffect(() => {
    if (data) {
      const searchQuery = productSearch.trim().toLowerCase();
      const filtered = data.filter((item) =>
        searchQuery ? item.title.toLowerCase().includes(searchQuery) : true
      );
      setFilteredProducts(filtered);
    }
  }, [data, productSearch]);

  useEffect(() => {
    // Preload images
    if (filteredProducts.length > 0) {
      filteredProducts.forEach((product) => {
        const img = new Image();
        img.src = product.image;
      });
    }
  }, [filteredProducts]);

  return (
    <section className="flex flex-row gap-x-2 gap-y-3 flex-wrap">
      {isLoading ? (
        <div className="flex flex-row gap-x-2 gap-y-3 flex-wrap">
          <Shimmer />
          <Shimmer />
          <Shimmer />
        </div>
      ) : (
        filteredProducts.map((product) => (
          <React.Fragment key={product.id}>
            <ProductCard {...product} />
          </React.Fragment>
        ))
      )}
    </section>
  );
};

export default ProductList;
