import HomePageFaq from "./components/HomePageElements/HomePageFaq";
import HomePageGallery from "./components/HomePageElements/HomePageGallery";
import HomePageHowWeWork from "./components/HomePageElements/HomePageHowWeWork";
import HomePageSelection from "./components/HomePageElements/HomePageSelection";
import HomePageSwiper from "./components/HomePageElements/HomePageSwiper";
import HomePageTeam from "./components/HomePageElements/HomePageTeam";
import HomePageThreeElements from "./components/HomePageElements/HomePageThreeElements";

export default function Home() {
  return (
    <div className="">
      {/* <FirstPart /> */}
      <HomePageSwiper />

      <HomePageSelection />
      <HomePageHowWeWork />
      <HomePageTeam />
      <HomePageFaq />
      <HomePageThreeElements />
      <HomePageGallery />
    </div>
  );
}
