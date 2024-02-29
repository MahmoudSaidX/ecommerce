import { Link } from "react-router-dom";
import { Product } from "../services/api/useAllProductsFetch";

type ProductCardProps = Omit<Product, "description">;

const ProductCard = ({
  id,
  title,
  image,
  category,
  price,
}: ProductCardProps) => {
  return (
    <Link to={`product/${id}`}>
      <article className="w-72 h-full p-4 shadow-lg">
        <img
          src={image}
          alt={title}
          className="object-scale-down h-32 w-full"
        />
        <div className="mt-4">
          <p className="text-lg font-bold">{title}</p>
          <p className="text-sm font-medium capitalize">{category}</p>
          <span className="text-gray-700 font-bold">{"$" + price}</span>
        </div>
      </article>
    </Link>
  );
};

export default ProductCard;
