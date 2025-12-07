import { HeroCarousel } from "@/components/sections/hero-carousel";
import { WhyUs } from "@/components/sections/why-us";
import { PopularRestaurants } from "@/components/sections/popular-restaurants";
import { NearYou } from "@/components/sections/near-you";
import { ExpertChefs } from "@/components/sections/expert-chefs";

export default function HomePage() {
  return (
    <main>
      <HeroCarousel />
      <WhyUs />
      <PopularRestaurants />
      <NearYou />
      <ExpertChefs />
    </main>
  );
}
