import { Route, Routes } from "react-router-dom";
import "./index.css";
import MainLayout from "./layouts/MainLayout";
import AllProductsScreen from "./pages/AllProductsScreen";
import ProductDetailsScreen from "./pages/ProductDetailsScreen";

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<AllProductsScreen />} />
        <Route path="product/:id" element={<ProductDetailsScreen />} />
      </Route>
    </Routes>
  );
}

export default App;
