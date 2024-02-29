import { useParams } from "react-router-dom";
import useProductDetailsFetch from "../services/api/useProductDetailsFetch";
import ShoppingCart from "../components/ShoppingCart";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addProductToCart } from "../services/state/slices/productSlice";

const ProductDetailsScreen = () => {
  const [open, setOpen] = useState(false);

  const { id } = useParams();
  const { productData } = useProductDetailsFetch(
    `https://fakestoreapi.com/products/${id}`
  );

  const dispatch = useDispatch();

  const handleAddToCart = () => {
    if (productData) {
      setOpen(true);
      dispatch(addProductToCart(productData));
    }
  };

  return (
    <>
      {productData ? (
        <section className="flex flex-row justify-between">
          <div className="w-1/2 flex flex-row justify-center">
            <img
              className="object-scale-down h-96"
              src={productData.image}
              alt={productData.title}
            />
          </div>
          <section className="w-1/2">
            <div className="mt-4">
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
            </div>

            <form className="flex flex-col gap-4">
              <button
                type="button"
                onClick={handleAddToCart}
                className="capitalize disabled bg-black rounded-md w-1/2 text-white py-2"
              >
                add to cart
              </button>

              <button
                disabled
                type="button"
                className="capitalize cursor-not-allowed disabled opacity-70 bg-black rounded-md text-white w-1/2 py-2"
              >
                pay with G pay
              </button>
            </form>
          </section>
          <ShoppingCart open={open} setOpen={setOpen} />
        </section>
      ) : null}
    </>
  );
};

export default ProductDetailsScreen;
