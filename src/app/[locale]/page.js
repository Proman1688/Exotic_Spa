import { PromoSection } from "./components/main-page/PromoSection";
import { PromoSecondSection } from "./components/main-page/PromoSecondSection";
import { FeaturedProducts } from "./components/main-page/FeaturedProducts";
import { WeeklyTopSelling } from "./components/main-page/WeeklyTopSelling";
import { useTranslations } from "next-intl";



export default function Home() {
  return (
  <div className="absolute top-0 left-0 w-full h-screen"> 
    <video className="w-full h-full object-cover" src="/seaLandscape.mp4" width="0" height="0" autoPlay loop muted preload="auto" playsInline>Your browser does not support the video tag.</video>
  </div>
  );
}