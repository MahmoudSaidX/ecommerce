import useImageZoom from "../../hooks/useHandleZoom";

const ProductImage = ({ image, title }: { image?: string; title?: string }) => {
  const {
    handleMouseEnter,
    handleMouseLeave,
    handleMouseMove,
    handleTouchStart,
    hovered,
    handlePositionUpdate,
    position,
  } = useImageZoom();
  return (
    <div className="w-1/2 mx-auto relative">
      <div
        className="relative overflow-hidden"
        style={{ width: "100%", height: "100%" }}
      >
        <img
          className="product-image object-scale-down h-96 mx-auto"
          src={image}
          alt={title}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onMouseMove={handleMouseMove}
          onTouchStart={handleTouchStart}
          onTouchMove={(event) => {
            const touch = event.touches[0];
            handlePositionUpdate(touch.clientX, touch.clientY);
          }}
          style={{
            transform: `scale(${hovered ? 2 : 1})`,
            transformOrigin: `${position.x * 100}% ${position.y * 100}%`,
          }}
        />
      </div>
    </div>
  );
};

export default ProductImage;
