import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const SkeletonSponsorsPage = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-8">
      {Array.from({ length: 8 }, (_, index) => (
        <div key={index}>
          <Skeleton
            width="100%"
            height={300}
            borderRadius={8}
            baseColor="#dedede"
          />
        </div>
      ))}
    </div>
  );
};

export default SkeletonSponsorsPage;
