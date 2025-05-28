import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";

const PlaceholderVideo = () => {
  return (
    <div className="relative cursor-pointer rounded-[16px] overflow-hidden bg-[#F1F1F1] w-[60px] h-[60px] md:w-[90px] md:h-[90px] ">
      <div className="absolute inset-0 flex items-center justify-center bg-black/10">
        <PlayCircleOutlineIcon style={{ fontSize: 32, color: "white" }} />
      </div>
    </div>
  );
};

export default PlaceholderVideo;
