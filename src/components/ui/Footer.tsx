import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black py-4 text-center text-white">
      <p>&copy; {new Date().getFullYear()} Brand Store. All rights reserved.</p>
      <ul className="flex flex-row items-center justify-center gap-2 mt-2">
        <li>
          <FaFacebook className="cursor-pointer text-xl text-white hover:transition-transform hover:ease-in-out hover:-translate-y-1 hover:text-gray-400" />
        </li>
        <li>
          <FaInstagram className="cursor-pointer text-xl text-white hover:transition-transform hover:ease-in-out hover:-translate-y-1 hover:text-gray-400" />
        </li>
        <li>
          <FaTwitter className="cursor-pointer text-xl text-white hover:transition-transform hover:ease-in-out hover:-translate-y-1 hover:text-gray-400" />
        </li>
        <li>
          <FaWhatsapp className="cursor-pointer text-xl text-white hover:transition-transform hover:ease-in-out hover:-translate-y-1 hover:text-gray-400" />
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
