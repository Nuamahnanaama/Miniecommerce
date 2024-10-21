import React from "react";
import Image from "next/image";
import first from "../Components/Images/insta-1.jpg";
import second from "../Components/Images/insta-2.jpg";
import third from "../Components/Images/insta-3.jpg";
import four from "../Components/Images/insta-4.jpg";
import five from "../Components/Images/insta-5.jpg";

const Gallery = () => {
  return (
    <div>
      <div className="text-[#232323] grid place-items-center ">
        <h1 className="mt-7 font-bold"># ELLA ON INSTAGRM</h1>
        <p className="italic text-sm">
          Phasellus lorem malesuada ligula pulvinar commodo maecenas
        </p>
      </div>
      <div className="grid grid-cols-5 gap-2 pb-4 mt-4">
        <Image src={first} alt="no img" />
        <Image src={second} alt="no img" />
        <Image src={third} alt="no img" />
        <Image src={four} alt="no img" />
        <Image src={five} alt="no img" />
      </div>
      <div className="grid place-items-center pb-12 text-sm">
        <buttton className="px-9 py-3 bg-[#232323] hover:bg-white text-white font-bold hover:text-[#232323] border border-[#232323]" >VIEW GALLERY</buttton>
      </div>
    </div>
  );
};

export default Gallery;
