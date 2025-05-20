import { PromoSection } from "./components/main-page/PromoSection";
import { PromoSecondSection } from "./components/main-page/PromoSecondSection";
import { FeaturedProducts } from "./components/main-page/FeaturedProducts";
import { WeeklyTopSelling } from "./components/main-page/WeeklyTopSelling";
import { useTranslations } from "next-intl";



export default function Home() {
  return (
  <>
  <div className="flex items-center justify-center"> <FeaturedProducts /> </div>
  <div className="flex items-center justify-center"> <PromoSecondSection /> </div>
  <div className="flex items-center justify-center"> <WeeklyTopSelling /> </div>
  </>
  );
}