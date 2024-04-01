
import Companies from "@/components/Companies";
import HeroSection from "@/components/HeroSection";
import NavSection from "@/components/NavSection";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02] text-white">
        <NavSection/>

        <HeroSection/>
        
        <Companies/>
        <div className="h-screen"></div>
      </main>
    </>
  );
}
