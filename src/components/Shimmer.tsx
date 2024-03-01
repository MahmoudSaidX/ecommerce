import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export const ShimmerForDetails = () => {
  return (
    <div>
      <Skeleton
        height={20}
        width={130}
        direction="ltr"
        enableAnimation
        baseColor="#ddd"
        duration={2}
        className="mb-2"
      />
      <Skeleton
        height={20}
        width={130}
        direction="ltr"
        enableAnimation
        baseColor="#ddd"
        duration={2}
        className="mb-2"
      />

      <Skeleton
        height={20}
        width={130}
        direction="ltr"
        enableAnimation
        baseColor="#ddd"
        duration={2}
        className="mb-2"
      />
    </div>
  );
};

const Shimmer = () => {
  return (
    <div className="rounded overflow-hidden w-[43vw] sm:w-[20vw] h-full p-4">
      <Skeleton
        height={200}
        direction="ltr"
        enableAnimation
        baseColor="#ddd"
        duration={10}
        className="w-full"
      />
      <div>
        <Skeleton
          height={20}
          width={130}
          direction="ltr"
          enableAnimation
          baseColor="#ddd"
          duration={2}
          className="mb-2"
        />
      </div>
      <div>
        <Skeleton
          height={20}
          width={130}
          direction="ltr"
          enableAnimation
          baseColor="#ddd"
          duration={2}
          className="mb-2"
        />
      </div>
    </div>
  );
};

export default Shimmer;
