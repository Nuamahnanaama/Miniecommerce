import Image from "next/image";
import React from "react";
import slide from "../Components/Images/frontbg.jpg";
const Frontpg = () => {
  return (
    <div>
      <div className="relative">
        <Image src={slide} alt="no img" className="abosulte inset-0 w-full" />
      </div>
      <div id="text" className="absolute inset-0">
        <div className="flex flex-col items-center pr-96 mt-64">
          <h1 className="text-[#232323] font-bold  text-4xl">COSMOPOLIS</h1>
          <div className="border border-[#232323] items-center border-spacing-3 w-10  mt-2"></div>
          <div className="mt-5">
            <p className="text-sm">Quisquemos sodales suscipit tortor ditaemcos condimentum de</p>
          <p  className="text-sm">cosmo lacus meleifend menean diverra loremous</p> </div>
          <button className="text-[white] bg-[#232323] hover:bg-white hover:text-[#232323] px-8 py-3 font-bold mt-9">SHOP NOW</button>

       </div>
      </div>
    </div>
  );
};

export default Frontpg;
