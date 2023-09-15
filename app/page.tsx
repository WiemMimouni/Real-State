import Achivements from "./components/home/achievements";
import BestDeals from "./components/properties/BestDeal";
import Contact from "./components/home/contact";
import Featured from "./components/home/Featured";
import MainBanner from "./components/home/MainBanner";
import Properties from "./components/home/Properties";
import VideoSection from "./components/home/videosection";

export default function Home() {
  return (
    <main>
      <MainBanner />
      <Featured/>
      <VideoSection/>
      <Achivements/>
      <BestDeals/>
      <Properties/>
      <Contact/>
    </main>
  );
}