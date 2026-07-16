
import Image from "next/image";
import Slider from "@/components/Slider";
import FeaturedItems from "@/components/FeaturedItems";
import Offers from "@/components/Offers";

export default function Home() {
  return (
  <div className="overflow-x-clip">
    <Slider />
    <FeaturedItems />
    <Offers />
  </div>
  );
}
