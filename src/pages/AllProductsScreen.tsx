// import Asidebar from "../components/Asidebar";
import ProductList from "../components/ProductList";

const AllProductsScreen = () => {
  return (
    <div className="flex flex-row justify-between">
      {/* <div className="w-1/4">
        <Asidebar />
      </div> */}
      <div className="w-3/4 mx-auto">
        <ProductList />
      </div>
    </div>
  );
};

export default AllProductsScreen;
