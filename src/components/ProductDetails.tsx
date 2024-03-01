import PaymentMethods from "./PaymentMethods";

type ProductDetailsProps = {
  title?: string;
  category?: string;
  description?: string;
  price?: number;
  handleAddToCart: () => void;
};

const ProductDetails = ({
  title,
  category,
  description,
  price,
  handleAddToCart,
}: ProductDetailsProps) => {
  return (
    <section className="w-full sm:w-1/2 mx-auto px-8 py-4">
      <div className="mt-4 flex flex-col gap-2">
        <p className="text-lg font-bold">{title}</p>
        <p className="text-sm font-medium capitalize">{category}</p>
        <p className="text-sm font-medium capitalize text-gray-600 my-4">
          {description}
        </p>
        <span className="text-gray-700 font-bold mb-2">{"$" + price}</span>
        <button
          type="button"
          onClick={handleAddToCart}
          className="capitalize disabled bg-black rounded-md sm:w-1/2 text-white py-2"
        >
          add to cart
        </button>
      </div>

      <PaymentMethods />
    </section>
  );
};

export default ProductDetails;
