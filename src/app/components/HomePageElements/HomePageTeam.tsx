import IconArrowLeftTeam from "@/app/icons/IconArrowLeftTeam";
import IconArrowRightTeam from "@/app/icons/IconArrowRightTeam";
import HomePageMember from "./HomePageMember";
import { TeamMemberInterface } from "@/app/lib/interface";

const team_members: TeamMemberInterface[] = [
  {
    name: "Chloe Williams",
    job: "CEO & founder",
    desc: "Monsectetuer adipiscing elit cras elementum duis pulvinar temporibus autem quibusdam et aut officiis debitis",
    fb_link: "",
    ig_link: "",
  },
  {
    name: "Chloe Williams",
    job: "CEO & founder",
    desc: "Monsectetuer adipiscing elit cras elementum duis pulvinar temporibus autem quibusdam et aut officiis debitis",
    fb_link: "",
    ig_link: "",
  },
  {
    name: "Chloe Williams",
    job: "CEO & founder",
    desc: "Monsectetuer adipiscing elit cras elementum duis pulvinar temporibus autem quibusdam et aut officiis debitis",
    fb_link: "",
    ig_link: "",
  },
];

const HomePageTeam = () => {
  return (
    <div className="main_section m-auto justify-center items-center flex flex-col w-full gap-8 xl:gap-16 ">
      <div className="flex flex-col w-full">
        <div className="flex flex-row justify-between">
          <div className="flex flex-col ">
            <h2 className="font-extrabold">Spoznajte náš tím</h2>
            <p className=" pt-4 mb-4">
              Temporibus autem quibusdam et aut officiis debitis aut rerum
              necessitatibus saepe
            </p>
          </div>
          <div className=" flex-row gap-4 hidden md:flex">
            <IconArrowLeftTeam />
            <IconArrowRightTeam />
          </div>
        </div>

        <div className="grid-cols-3 gap-24 mt-16 hidden md:grid">
          {team_members.map((object, index) => (
            <HomePageMember data={object} key={index} />
          ))}
        </div>
      </div>{" "}
    </div>
  );
};

export default HomePageTeam;
