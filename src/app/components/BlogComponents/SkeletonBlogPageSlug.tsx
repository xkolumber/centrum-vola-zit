import { CircularProgress } from "@mui/material";
import "react-loading-skeleton/dist/skeleton.css";

const SkeletonBlogPageSlug = () => {
  return (
    <div className="m-auto main_section min-h-screen ">
      {" "}
      <CircularProgress size={24} color="inherit" className="mt-8" />{" "}
    </div>
  );
};

export default SkeletonBlogPageSlug;
