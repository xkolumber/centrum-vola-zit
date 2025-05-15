import Image from "next/image";
import {
  isImageFitCover,
  isImageSlide,
  useLightboxProps,
  useLightboxState,
} from "yet-another-react-lightbox";

interface Slide {
  width?: number;
  height?: number;
  src: string;
  blurDataURL?: string;
}

interface Rect {
  width: number;
  height: number;
}

interface NextJsImageProps {
  slide: Slide;
  offset: number;
  rect: Rect;
}

function isNextJsImage(slide: Slide): slide is Slide {
  return (
    isImageSlide(slide) &&
    typeof slide.width === "number" &&
    typeof slide.height === "number"
  );
}

export default function NextJsImage({ slide, offset, rect }: NextJsImageProps) {
  const {
    on: { click },
    carousel: { imageFit },
  } = useLightboxProps();

  const { currentIndex } = useLightboxState();

  const cover = isImageSlide(slide) && isImageFitCover(slide, imageFit);

  if (!isNextJsImage(slide)) return null;

  const width = slide.width ?? 0;
  const height = slide.height ?? 0;

  const calculatedWidth = !cover
    ? Math.round(Math.min(rect.width, (rect.height / height) * width))
    : rect.width;

  const calculatedHeight = !cover
    ? Math.round(Math.min(rect.height, (rect.width / width) * height))
    : rect.height;

  return (
    <div
      style={{
        position: "relative",
        width: calculatedWidth,
        height: calculatedHeight,
      }}
    >
      <Image
        fill
        alt=""
        src={slide.src}
        loading="eager"
        draggable={false}
        placeholder={slide.blurDataURL ? "blur" : undefined}
        style={{
          objectFit: cover ? "cover" : "contain",
          cursor: click ? "pointer" : undefined,
        }}
        sizes={`${Math.ceil((calculatedWidth / window.innerWidth) * 100)}vw`}
        onClick={
          offset === 0 ? () => click?.({ index: currentIndex }) : undefined
        }
      />
    </div>
  );
}
