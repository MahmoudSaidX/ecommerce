const ProductImage = ({ image, title }: { image?: string; title?: string }) => {
  return (
    <div className="w-1/2 mx-auto">
      <img className="object-scale-down h-96 mx-auto" src={image} alt={title} />
    </div>
  );
};

export default ProductImage;
