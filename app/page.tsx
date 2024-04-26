
import AllBrands from "@/components/AllBrands";
import End from "@/components/End";
import GetApp from "@/components/GetApp";
import Hero from "@/components/Hero";
import Faq from "@/components/Faq";

export default function Home() {
  return (
    <h1 className= "font-bold text-ablue text-2xl">
      {/* The below are stored in components folder */}
      <Hero />
      <GetApp />
      <AllBrands />
      <Faq />
      <End />
    </h1>
  );
}
