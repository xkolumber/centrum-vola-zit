import {
  aws_bucket_url,
  cloudfront_url,
} from "@/app/functions/functionsClient";
import IconTeamPlaceholder from "@/app/icons/IconTeamPlaceholder";
import { TeamMemberInterface } from "@/app/lib/interface";
import Image from "next/image";

interface Props {
  data: TeamMemberInterface;
}

const HomePageMember = ({ data }: Props) => {
  return (
    <div>
      <div className="flex flex-col">
        {data.photo != "none" ? (
          <Image
            alt={data.name}
            width={600}
            height={600}
            src={data.photo.replace(aws_bucket_url, cloudfront_url)}
            className={`rounded-[16px] h-[350px] 2xl:h-[440px] object-cover ${(data.name === "Mgr. Alexandra Németh" || data.name === "Mgr. Miriam Garneková" || data.name === "Miroslava Holubčíková") && "object-top"}`}
            priority
          />
        ) : (
          <IconTeamPlaceholder />
        )}

        <p className="text-[12px] mt-4 uppercase font-medium">{data.job}</p>
        <h5 className="font-extrabold">{data.name}</h5>
        <p className="text-[16px] mt-4">{data.desc}</p>
      </div>
    </div>
  );
};

export default HomePageMember;
