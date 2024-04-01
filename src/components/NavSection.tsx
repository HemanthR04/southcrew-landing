import React from "react";
import Link from "next/link";


const NavSection = () => {
   
  return (
    <div className="fixed top-10 inset-x-0 max-w-2xl mx-auto z-50 flex justify-between items-center ">
      <div>
        <ul className="flex ">
          <li>
            <Link href={"/"} className="text-lg">What we do?</Link>
          </li>
        </ul>
      </div>
      <div>
        <h1 className="font-bold text-4xl">SOUTHCREW</h1>
      </div>
      <div>
      
        <Link
          href={"/"}
          className="text-lg"
        >
          Our Work!
        </Link>
      </div>
    </div>
  );
};

export default NavSection;
