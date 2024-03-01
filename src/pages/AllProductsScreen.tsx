import Asidebar from "../components/containers/Asidebar";
import ProductList from "../components/containers/ProductList";

import ProductsHeader from "../components/containers/ProductsHeader";

const AllProductsScreen: React.FC = () => {
  return (
    <div className="flex flex-row justify-between">
      <div className="w-1/4 hidden sm:block">
        <Asidebar />
      </div>
      <div className="sm:w-3/4 mb-12 p-4">
        <ProductsHeader />
        <ProductList />
      </div>
    </div>
  );
};

export default AllProductsScreen;
