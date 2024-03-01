import { useState } from "react";

const useImageZoom = () => {
  const [hovered, setHovered] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  const handleMouseMove = (event: React.MouseEvent<HTMLImageElement>) => {
    handlePositionUpdate(event.clientX, event.clientY);
  };

  const handleTouchStart = (event: React.TouchEvent<HTMLImageElement>) => {
    const touch = event.touches[0];
    handlePositionUpdate(touch.clientX, touch.clientY);
  };

  const handlePositionUpdate = (clientX: number, clientY: number) => {
    const rect = document
      .querySelector(".product-image")
      ?.getBoundingClientRect();

    if (!rect) return;

    const { left, top, width, height } = rect;
    const x = (clientX - left) / width;
    const y = (clientY - top) / height;
    setPosition({ x, y });
  };

  return {
    hovered,
    position,
    handleMouseEnter,
    handlePositionUpdate,
    handleMouseLeave,
    handleMouseMove,
    handleTouchStart,
  };
};

export default useImageZoom;
