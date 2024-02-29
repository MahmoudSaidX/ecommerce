import Skeleton from "react-loading-skeleton";

const Shimmer = () => {
  return (
    <div className="max-w-sm rounded overflow-hidden">
      <Skeleton
        height={200}
        direction="ltr"
        enableAnimation
        baseColor="#000"
        duration={10}
        className="w-full"
      />
      <div className="px-6 py-4">
        <Skeleton
          height={20}
          width={120}
          direction="ltr"
          enableAnimation
          baseColor="#000"
          duration={10}
          className="mb-2"
        />
      </div>
    </div>
  );
};

export default Shimmer;
