import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { Product } from "../services/api/useAllProductsFetch";
import { addProductToCart } from "../services/state/slices/productSlice";

import {
  ShimmerForDetails,
  ShimmerForProductImage,
} from "../components/Shimmer";
import useProductDetailsFetch from "../services/api/useProductDetailsFetch";
import { toggletoggleCart } from "../services/state/slices/toggleCartSlice";
import ProductDetails from "../components/ProductDetails";
import ProductImage from "../components/ProductImage";

const ProductDetailsScreen = () => {
  const { id } = useParams<{ id: string }>();

  const {
    data: productData,
    isLoading,
    fetchData,
  } = useProductDetailsFetch<Product>();

  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggletoggleCart());
  };

  const handleAddToCart = () => {
    if (productData) {
      handleToggle();
      dispatch(addProductToCart(productData));
    }
  };

  useEffect(() => {
    const url = `https://fakestoreapi.com/products/${id}`;
    fetchData(url);
  }, [id]);

  return (
    <section className="mt-8 flex justify-between flex-col sm:flex-row">
      {isLoading ? (
        <ShimmerForProductImage />
      ) : (
        <ProductImage image={productData?.image} title={productData?.title} />
      )}
      {isLoading ? (
        <ShimmerForDetails />
      ) : (
        <ProductDetails
          category={productData?.category}
          description={productData?.description}
          handleAddToCart={handleAddToCart}
          price={productData?.price}
          title={productData?.title}
        />
      )}
    </section>
  );
};

export default ProductDetailsScreen;
