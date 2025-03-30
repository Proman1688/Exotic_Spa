import { PromoSection } from "./components/main-page/PromoSection";
import { PromoSecondSection } from "./components/main-page/PromoSecondSection";

export default function Home() {
  return (
  <>
  <div className="flex items-center justify-center">
    <PromoSection />
  </div>
  <div className="flex items-center justify-center">
    <PromoSecondSection />
  </div>
  </>
  );
}