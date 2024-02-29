import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { toggletoggleCart } from "../services/state/slices/toggleCartSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const handleToggle = () => {
    dispatch(toggletoggleCart());
  };
  return (
    <nav>
      <ul className="flex flex-row gap-2 bg-black px-5 py-4 text-white">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li onClick={handleToggle}>cart</li>
      </ul>
    </nav>
  );
};

export default Navbar;
