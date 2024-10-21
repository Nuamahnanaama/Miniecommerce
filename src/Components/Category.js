import React from "react";
import Image from "next/image";

const Category = ({ CategoryImage, CategoryName, CategoryPrice }) => {
  return (
    <div className="mt-10 px-10 shadow-md rounded-[8px] border border-[#dddddd] py-3">
      <div>
        <Image
         
          height={150}
          width={150}
          src={CategoryImage}
          alt="no img"
        />
      </div>
      <div className="">
      <p>{CategoryName}</p>
      <p>{CategoryPrice}</p>
      </div>
    </div>
  );
};

export default Category;
