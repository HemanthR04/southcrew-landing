import Link from "next/link"
import { Spotlight } from "./ui/Spotlight"



const HeroSection = () => {
  return (
    <div className="h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
       <div className="p-4 relative z-10 w-full text-center">
       
        <h1 className="mt-20 md:mt-0 text-3xl md:text-6xl max-w-4xl font-bold mx-auto "   >An agency  that will help you Design,Develop and Rebrand.</h1>
        <p className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-2xl mx-auto">Our goal is to craft beautiful and efficient digital products that
will help you turn <b>browsers into buyers</b> and drive <b>sales through the roof.</b></p>
<div className="mt-4 flex justify-center justify-items-center ">
    <Link href="/bookacall" className="border-2 py-2 px-4 bg-white text-black rounded-xl shadow-sm  shadow-neutral-300">
        Talk to us for FREE now!
    </Link>

</div>
       </div>
        
        </div>
  )
}

export default HeroSection