import Image from "next/image";
import Hero from "./components/Hero";
import { Button } from "./components/ui/button";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import SHOES from "./components/cardData";
import FeaturedSection from "./components/FeaturedSection";
import GearUp from "./components/CardData2";
import FeaturedSection2 from "./components/FeaturedSection2";
import FeaturedSection3 from "./components/FeaturedSection3";
import CategoriesGrid from "./components/CategoriesSection";

export default async function Home() {
  return (
    <>
      <Hero />
      <SHOES/>
      <FeaturedSection/>
      <GearUp/>
      <FeaturedSection2/>
      <FeaturedSection3/>
      <CategoriesGrid/>
    </>
  );
}
