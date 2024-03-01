import { BsFillGrid3X3GapFill, BsFillGridFill } from "react-icons/bs";
import Asidebar from "../components/Asidebar";
import ProductList from "../components/ProductList";
import { useDispatch } from "react-redux";
import { searchForProduct } from "../services/state/slices/productSlice";
import { ChangeEvent } from "react";

const AllProductsScreen: React.FC = () => {
  const dispatch = useDispatch();

  const handleSearchInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(searchForProduct(e.currentTarget.value));
  };

  return (
    <div className="flex flex-row justify-between">
      <div className="w-1/4 hidden sm:block">
        <Asidebar />
      </div>
      <div className="sm:w-3/4 mb-12 p-4">
        <section className="flex flex-row items-center justify-between mb-8">
          <p className="sm:hidden text-gray-500 text-sm">20 Products</p>
          <p className="hidden sm:block">
            <span>Home</span> / <span className="text-gray-500">products</span>
          </p>
          <div className="flex flex-row gap-6">
            <ul className="sm:flex flex-row items-center gap-2 hidden">
              <li>
                <BsFillGridFill className="text-gray-700 hover:text-gray-400 transition-colors ease-linear text-xl cursor-pointer" />
              </li>
              <li>
                <BsFillGrid3X3GapFill className="text-gray-400 text-xl cursor-pointer" />
              </li>
            </ul>
            <input
              type="text"
              onChange={handleSearchInputChange}
              className="focus:outline-none p-1 focus:border-b-2 focus:border-b-black transition-colors ease-linear"
              placeholder="Search for a product..."
            />
          </div>
        </section>
        <ProductList />
      </div>
    </div>
  );
};

export default AllProductsScreen;
