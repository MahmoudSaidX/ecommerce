import { Link } from "react-router-dom";
import { Product } from "../services/api/useAllProductsFetch";
import { useDispatch } from "react-redux";
import {
  removeProductFromCart,
  updateCartItemQuantity,
} from "../services/state/slices/productSlice";
import { useState } from "react";

const CartItem = ({ id, title, image, price, category }: Product) => {
  const [count, setCount] = useState<number>(1);

  const increaseCount = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decreaseCount = () => {
    if (count > 1) {
      setCount((prevCount) => prevCount - 1);
    }
  };

  const dispatch = useDispatch();

  const handleRemoveFromCart = (productId: number) => {
    dispatch(removeProductFromCart(productId));
  };

  const handleQuantityChange = (productId: number, quantity: number) => {
    dispatch(updateCartItemQuantity({ productId, quantity }));
  };

  return (
    <li className="flex py-6">
      <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover object-center"
        />
      </div>

      <div className="ml-4 flex flex-1 flex-col">
        <div>
          <div className="flex justify-between text-base font-medium text-gray-900">
            <h3>
              <Link to={`product/${id}`}>{title}</Link>
            </h3>
            <p className="ml-4">{"$" + price}</p>
          </div>
          <p className="mt-1 text-sm text-gray-500">{category}</p>
        </div>
        <div className="flex flex-1 items-end justify-between text-sm">
          <p className="text-gray-500 flex flex-row gap-2">
            <span
              className="cursor-pointer"
              onClick={() => {
                handleQuantityChange(id, count);
                increaseCount();
              }}
            >
              +
            </span>
            <span>{count}</span>
            <span
              className="cursor-pointer"
              onClick={() => {
                handleQuantityChange(id, count);
                decreaseCount();
              }}
            >
              -
            </span>
          </p>

          <div className="flex">
            <button
              type="button"
              onClick={() => handleRemoveFromCart(id)}
              className="font-medium text-gray-600 hover:text-gray-500"
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
