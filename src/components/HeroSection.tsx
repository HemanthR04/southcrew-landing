import Link from "next/link";

import { HoverBorderGradient } from "./ui/hover-border-gradient";

import ClientReview from "./ClientReview";
import Companies from "./Companies";
import { BackgroundBeams } from "./ui/background-beams";
import NavSection from "./NavSection";
import { WavyBackground } from "./ui/wavy-background";




const HeroSection = () => {
  return (
    <>
    
    <div className=" h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0">
    <WavyBackground>
      
      <div className="p-4 relative z-10 w-full text-center inset-x-0 ">
      <NavSection/>
        <h1 className="mt-20 md:mt-[160px] text-3xl md:text-7xl max-w-6xl font-bold mx-auto ">
          An agency that will help you Design,Develop and Rebrand.
        </h1>
        <p className="mt-4 md:mt-8 font-normal text-base md:text-lg text-neutral-300 max-w-2xl mx-auto">
          Our goal is to craft beautiful and efficient digital products that
          will help you turn <b>browsers into buyers</b> and drive{" "}
          <b>sales through the roof.</b>
        </p>
        <div className="my-10 flex justify-center justify-items-center ">
          <Link href="/bookacall">
            <HoverBorderGradient
              containerClassName="rounded-full"
              as="button"
              className="dark:bg-black bg-black text-white dark:text-black flex items-center space-x-2"
            >
              
              <span> Talk to us for FREE now!</span>
            </HoverBorderGradient>
          </Link>
        </div>
       
        

        
        
      </div>
      </WavyBackground>
    </div>
    
    </>
    
  );
};

export default HeroSection;
