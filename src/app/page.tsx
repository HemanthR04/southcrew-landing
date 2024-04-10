import Companies from "@/components/Companies";
import HeroSection from "@/components/HeroSection";
import NavSection from "@/components/NavSection";
import Services from "@/components/Services";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <main className="min-h-screen bg-black antialiased  text-white">
        <HeroSection />

        <Companies />
        <Services/>
        <div className="h-screen"></div>
      </main>
    </>
  );
}
