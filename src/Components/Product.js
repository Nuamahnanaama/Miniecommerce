import React from "react";
import Image from "next/image";

const Product = ({ ProductImage,ProductName, ProductPrice }) => {
  return (
    <div className="mt-10 px-10 shadow-md rounded-[8px] border border-[#dddddd] py-3">
      <div>
        <Image
         
          height={150}
          width={150}
          src={ProductImage}
          alt="no img"
        />
      </div>
      <div className="">
      <p>{ProductName}</p>
      <p>{ProductPrice}</p>
      </div>
    </div>
  );
};
export default Product;