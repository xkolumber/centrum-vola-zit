import HomePageHowWeWork from "./components/HomePageElements/HomePageHowWeWork";
import HomePageSelection from "./components/HomePageElements/HomePageSelection";
import HomePageSwiper from "./components/HomePageElements/HomePageSwiper";

export default function Home() {
  return (
    <div className="">
      {/* <FirstPart /> */}
      <HomePageSwiper />

      <HomePageSelection />
      <HomePageHowWeWork />
    </div>
  );
}
