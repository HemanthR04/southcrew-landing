import React from "react";
import Link from "next/link";
const NavSection = () => {
   
  return (
    <div className="fixed top-10 inset-x-0 max-w-2xl mx-auto z-50 flex justify-between items-center ">
      <div>
        <ul className="flex ">
          <li>
            <Link href={"/"}>What we do?</Link>
          </li>
        </ul>
      </div>
      <div>
        <h1 className="font-bold text-xl">SOUTHCREW</h1>
      </div>
      <div>
      
        <Link
          href={"/"}
          className="border-2 py-2 px-4  rounded-xl   shadow-neutral-300"
        >
          Book a call
        </Link>
      </div>
    </div>
  );
};

export default NavSection;
