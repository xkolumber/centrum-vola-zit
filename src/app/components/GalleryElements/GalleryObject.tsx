import Image from "next/image";
import {
  aws_bucket_url,
  BLUR_DATA_URL_GRAY,
  cloudfront_url,
  getFormatDate,
} from "../../functions/functionsClient";
import { GalleryInterface } from "../../lib/interface";
import Link from "next/link";
interface Props {
  data: GalleryInterface;
}

const GalleryObject = ({ data }: Props) => {
  return (
    <Link
      className="flex flex-col hover:scale-[1.02] duration-200 cursor-pointer"
      href={`/galeria/${data.slug}`}
    >
      <Image
        src={data.fotky[0].replace(aws_bucket_url, cloudfront_url)}
        alt="Left"
        width={600}
        height={600}
        className="w-full h-[400px]  object-cover rounded-[16px]"
        priority
        placeholder="blur"
        blurDataURL={BLUR_DATA_URL_GRAY}
      />
      <h6 className="font-extrabold mt-4">{data.nazov}</h6>
      <p className="text-gray-700 mt-2">{getFormatDate(data.datum_pridania)}</p>
    </Link>
  );
};

export default GalleryObject;
