import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export const ShimmerForProductImage = () => {
  return (
    <div className="w-1/2 mx-auto">
      <Skeleton
        height={200}
        direction="ltr"
        enableAnimation
        baseColor="#ddd"
        duration={10}
        className="w-full"
      />
    </div>
  );
};

export const ShimmerForDetails = () => {
  return (
    <section className="w-full sm:w-1/2 mx-auto px-8 py-4">
      <div className="mt-4 flex flex-col gap-2">
        <p className="text-lg font-bold">
          <Skeleton
            width={100}
            direction="ltr"
            enableAnimation
            baseColor="#ddd"
            duration={2}
            className="mb-2 h-full"
          />
        </p>
        <p className="text-sm font-medium capitalize">
          <Skeleton
            width={100}
            direction="ltr"
            enableAnimation
            baseColor="#ddd"
            duration={2}
            className="mb-2 h-full"
          />
        </p>
        <p className="text-sm font-medium capitalize text-gray-600 my-4">
          <Skeleton
            width={100}
            direction="ltr"
            enableAnimation
            baseColor="#ddd"
            duration={2}
            className="mb-2 h-full"
          />
        </p>
        <span className="text-gray-700 font-bold mb-2">
          <Skeleton
            width={100}
            direction="ltr"
            enableAnimation
            baseColor="#ddd"
            duration={2}
            className="mb-2 h-full"
          />
        </span>
      </div>
    </section>
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
