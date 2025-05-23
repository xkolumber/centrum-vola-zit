import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const SkeletonActualityHomePage = () => {
  return (
    <div className="main_section m-auto justify-between md:items-center flex flex-col md:flex-row w-full gap-8 xl:gap-16 ">
      <div className="flex-col md:w-[60%] hidden md:flex">
        <p>
          {" "}
          <Skeleton
            width="10%"
            borderRadius={8}
            baseColor="#dedede"
            count={1}
          />
        </p>
        <h2 className="font-extrabold max-w-[700px]">
          <Skeleton
            width="30%"
            borderRadius={8}
            baseColor="#dedede"
            className="mt-4 mb-2"
          />
        </h2>

        <p>
          {" "}
          <Skeleton
            width="50%"
            borderRadius={8}
            baseColor="#dedede"
            count={3}
          />
        </p>

        <Skeleton
          width={100}
          height={40}
          borderRadius={8}
          baseColor="#dedede"
        />
      </div>{" "}
      <div className="flex flex-col  md:hidden">
        <p>
          {" "}
          <Skeleton
            width="20%"
            borderRadius={8}
            baseColor="#dedede"
            count={1}
          />
        </p>
        <h2 className="font-extrabold max-w-[700px]">
          <Skeleton
            width="100%"
            borderRadius={8}
            baseColor="#dedede"
            className="mt-4 mb-2"
            count={2}
          />
        </h2>

        <p>
          {" "}
          <Skeleton
            width="100%"
            borderRadius={8}
            baseColor="#dedede"
            count={2}
          />
        </p>

        <Skeleton
          width={100}
          height={40}
          borderRadius={8}
          baseColor="#dedede"
        />
      </div>{" "}
      <div className="w-full md:w-[40%] hidden md:block">
        <Skeleton
          width="100%"
          height={400}
          borderRadius={8}
          baseColor="#dedede"
        />
      </div>
    </div>
  );
};

export default SkeletonActualityHomePage;
