import IconFacebookTeam from "@/app/icons/IconFacebookTeam";
import IconInstagramTeam from "@/app/icons/IconInstagramTeam";
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
            alt="image"
            width={600}
            height={600}
            src={data.photo}
            className="rounded-[16px] h-[280px] md:h-[440px]"
          />
        ) : (
          <IconTeamPlaceholder />
        )}

        <p className="text-[12px] mt-4 uppercase font-medium">{data.job}</p>
        <h5 className="font-extrabold">{data.name}</h5>
        <p className="text-[16px] mt-4">{data.desc}</p>
        <div className="flex flew-row mt-8 gap-4">
          <IconFacebookTeam />

          <IconInstagramTeam />
        </div>
      </div>
    </div>
  );
};

export default HomePageMember;
