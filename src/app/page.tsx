import HomePageFaq from "./components/HomePageElements/HomePageFaq";
import HomePageHowWeWork from "./components/HomePageElements/HomePageHowWeWork";
import HomePageSelection from "./components/HomePageElements/HomePageSelection";
import HomePageSwiper from "./components/HomePageElements/HomePageSwiper";
import HomePageTeam from "./components/HomePageElements/HomePageTeam";

export default function Home() {
  return (
    <div className="">
      {/* <FirstPart /> */}
      <HomePageSwiper />

      <HomePageSelection />
      <HomePageHowWeWork />
      <HomePageTeam />
      <HomePageFaq />
    </div>
  );
}
