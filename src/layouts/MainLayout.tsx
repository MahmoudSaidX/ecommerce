import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { toggletoggleCart } from "../services/state/slices/toggleCartSlice";
import { RootState } from "../services/state/store";
import ShoppingCart from "../components/ShoppingCart";

const MainLayout = () => {
  const { isOpen } = useSelector((state: RootState) => state.toggleCart);

  const dispatch = useDispatch();
  const handleToggle = () => {
    dispatch(toggletoggleCart());
  };

  return (
    <main>
      <Navbar />
      <ShoppingCart open={isOpen} setOpen={handleToggle} />
      <br />
      <Outlet />
    </main>
  );
};

export default MainLayout;
