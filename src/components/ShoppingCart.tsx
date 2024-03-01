/* eslint-disable @typescript-eslint/no-explicit-any */
import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import CartItem from "./CartItem";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../services/state/store";
import { Link } from "react-router-dom";
import { closetoggleCart } from "../services/state/slices/toggleCartSlice";
import { CiBookmarkPlus } from "react-icons/ci";
import { formatCurrency } from "../utils/formatCurrency";

const ShoppingCart = ({ open, setOpen }: any) => {
  const cart = useSelector((state: RootState) => state.product.cart);
  const totalPrice = cart.reduce((acc: number, item: any) => {
    return acc + item.price * item.quantity;
  }, 0);

  const dispatch = useDispatch();

  const handleCloseCart = () => {
    dispatch(closetoggleCart());
  };

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                  <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                    <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                      <div className="flex items-start justify-between">
                        <Dialog.Title className="text-lg font-medium text-gray-900">
                          Shopping cart
                        </Dialog.Title>
                        <div className="ml-3 flex h-7 items-center">
                          <button
                            type="button"
                            className="relative -m-2 p-2 text-gray-400 hover:text-gray-500"
                            onClick={() => setOpen(false)}
                          >
                            <span className="absolute -inset-0.5" />
                            <span className="sr-only">Close panel</span>
                          </button>
                        </div>
                      </div>

                      <div className="mt-8">
                        <div className="flow-root">
                          <ul
                            role="list"
                            className="-my-6 divide-y divide-gray-200"
                          >
                            {cart.map((product) => (
                              <CartItem key={product.id} {...product} />
                            ))}
                            <li
                              className="flex flex-row gap-2 justify-center items-center cursor-pointer py-2 hover:text-slate-600 hover:transition-all hover:ease-in-out"
                              onClick={handleCloseCart}
                            >
                              <Link to={`/`}>Add item</Link>
                              <CiBookmarkPlus />
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                      <div className="flex justify-between text-base font-medium text-gray-900">
                        <p>Subtotal</p>
                        <p>{`${formatCurrency(totalPrice)}`}</p>
                      </div>
                      <p className="mt-0.5 text-sm text-gray-500">
                        Shipping and taxes calculated at checkout.
                      </p>
                      <div className="mt-6">
                        <a
                          href="#"
                          className="flex items-center justify-center rounded-md border border-transparent bg-black px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-gray-700"
                        >
                          Checkout
                        </a>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default ShoppingCart;
