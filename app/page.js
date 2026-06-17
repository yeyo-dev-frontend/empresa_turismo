import Hero from "@/components/sections/hero";
import Tradicion from "@/components/sections/tradicion";
import ProductoYProceso from "@/components/sections/productoYProceso";
import Craft from "@/components/sections/craft";
import TypicalDishes from "@/components/sections/typical_dishes";
import TouristCenters from "@/components/sections/tourist_centers";
import Location from "@/components/sections/location";
import Gallery from "@/components/sections/gallery";

export default function Home() {
  return (
    <main>
      <Hero />
      <Tradicion />
      <ProductoYProceso />
      <Craft />
      <TypicalDishes />
      <TouristCenters />
      <Location />
      <Gallery />
    </main>
  );
}