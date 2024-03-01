import { Link } from "react-router-dom";
import { Product } from "../../services/api/useAllProductsFetch";
import { useState } from "react";
import { formatCurrency } from "../../utils/formatCurrency";

type ProductCardProps = Omit<Product, "description">;

const ProductCard = ({
  id,
  title,
  image,
  category,
  price,
}: ProductCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <Link to={`product/${id}`}>
      <article className="transition-all ease-linear w-[43vw] sm:w-[20vw] h-full p-4 shadow-sm hover:shadow-lg hover:transition-transform hover:ease-linear hover:-translate-y-2">
        <img
          src={image}
          alt={title}
          className="object-scale-down h-32 w-full"
        />
        <div className="mt-4">
          <p
            className={`text-lg font-bold truncate`}
            title={isHovered ? title : ""}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {title}
          </p>
          <p className="text-sm font-medium capitalize">{category}</p>
          <span className="text-gray-700 font-bold">
            {`${formatCurrency(price)}`}
          </span>
        </div>
      </article>
    </Link>
  );
};

export default ProductCard;
