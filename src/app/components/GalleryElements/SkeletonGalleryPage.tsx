import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const SkeletonGalleryPage = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
      {Array.from({ length: 6 }, (_, index) => (
        <div key={index}>
          <Skeleton
            width="100%"
            height={400}
            borderRadius={8}
            baseColor="#dedede"
          />
          <h6>
            <Skeleton
              width="50%"
              borderRadius={8}
              baseColor="#dedede"
              className="mt-4 mb-2"
            />
          </h6>
          <p>
            <Skeleton
              width="20%"
              borderRadius={8}
              baseColor="#dedede"
              count={1}
            />
          </p>
        </div>
      ))}
    </div>
  );
};

export default SkeletonGalleryPage;
