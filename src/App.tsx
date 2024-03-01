import { Navigate, Route, Routes } from "react-router-dom";
import "./index.css";
import MainLayout from "./layouts/MainLayout";
import AllProductsScreen from "./pages/AllProductsScreen";
import ProductDetailsScreen from "./pages/ProductDetailsScreen";
import NotFound from "./components/NotFound";

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<AllProductsScreen />} />
        <Route path="product/:id" element={<ProductDetailsScreen />} />
        <Route path="*" element={<Navigate to="/404" />} />
        <Route path="/404" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
