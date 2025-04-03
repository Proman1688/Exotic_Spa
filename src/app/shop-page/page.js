import Filter_1 from "../components/shop/Filter_1";
import Filter_2 from "../components/shop/Filter_2";

export default function Home() {
  return (
  <>
  <div className="flex items-center justify-center"> <Filter_1 /> </div>
  <div className="flex border-2"> <Filter_2 /> </div>
  </>
  );
}