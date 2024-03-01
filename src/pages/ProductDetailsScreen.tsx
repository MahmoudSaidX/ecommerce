import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  FaCcApplePay,
  FaCcMastercard,
  FaCcVisa,
  FaGooglePay,
} from "react-icons/fa";

import { Product } from "../services/api/useAllProductsFetch";
import { addProductToCart } from "../services/state/slices/productSlice";
import ShoppingCart from "../components/ShoppingCart";
import { ShimmerForDetails } from "../components/Shimmer";
import useProductDetailsFetch from "../services/api/useProductDetailsFetch";

const ProductDetailsScreen = () => {
  const [open, setOpen] = useState(false);

  const { id } = useParams<{ id: string }>();

  const {
    data: productData,
    isLoading,
    fetchData,
  } = useProductDetailsFetch<Product>();

  const dispatch = useDispatch();

  const handleAddToCart = () => {
    if (productData) {
      setOpen(true);
      dispatch(addProductToCart(productData));
    }
  };

  useEffect(() => {
    const url = `https://fakestoreapi.com/products/${id}`;
    fetchData(url);
  }, [id]);

  if (!productData) {
    return null;
  }

  return (
    <section className="mt-8 flex justify-between flex-col sm:flex-row">
      <div className="w-1/2 mx-auto">
        <img
          className="object-scale-down h-96 mx-auto"
          src={productData.image}
          alt={productData.title}
        />
      </div>
      {isLoading ? (
        <ShimmerForDetails />
      ) : (
        <section className="w-full sm:w-1/2 mx-auto px-8 py-4">
          <div className="mt-4 flex flex-col gap-2">
            <p className="text-lg font-bold">{productData.title}</p>
            <p className="text-sm font-medium capitalize">
              {productData.category}
            </p>
            <p className="text-sm font-medium capitalize text-gray-600 my-4">
              {productData.description}
            </p>
            <span className="text-gray-700 font-bold mb-2">
              {"$" + productData.price}
            </span>

            <button
              type="button"
              onClick={handleAddToCart}
              className="capitalize disabled bg-black rounded-md sm:w-1/2 text-white py-2"
            >
              add to cart
            </button>

            <article className="sm:w-1/2 my-2">
              <ul className="flex flex-row gap-2 items-center justify-center">
                <li>
                  <FaCcVisa className="text-3xl" />
                </li>
                <li>
                  <FaCcMastercard className="text-3xl" />
                </li>
                <li>
                  <FaGooglePay className="text-3xl" />
                </li>
                <li>
                  <FaCcApplePay className="text-3xl" />
                </li>
              </ul>
            </article>
          </div>
        </section>
      )}
      <ShoppingCart open={open} setOpen={setOpen} />
    </section>
  );
};

export default ProductDetailsScreen;
