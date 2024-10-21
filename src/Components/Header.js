"use client";
import React from "react";
import Image from "next/image";
import logo from "../Components/Images/ella-logo.png";
import { useRouter } from "next/navigation";

const Header = () => {
  const router = useRouter();

  function userlogin() {
    router.push("/Login");
  }

  return (
    <div>
      <div className="flex justify-between ">
        <div>
          <Image src={logo} alt="no img" className="mt-5 pl-10" width={120} />
        </div>
        <div className="flex space-x-3 px-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-6 mt-5 "
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
            />
          </svg>{" "}
          <p className="text-[#363636] mt-5">Shopping Cart</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-6 mt-5"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
            />
          </svg>
          <p className="text-[#363636] mt-5">My Wish List</p>
         <div className="mt-5">
          <button
            onClick={userlogin}
            className="text-[#363636]  cursor-pointer hover:underline"
          >
            Sign in or Create an account
          </button>
          </div>
        </div>
      </div>
      <div className="bg-black flex pl-11 py-5 space-x-6">
        <button className="font-bold text-white text-sm cursor-pointer">
          THEME DEMO
        </button>
        <button className="font-bold text-white text-sm cursor-pointer">
          SHOP
        </button>
        <button className="font-bold text-white text-sm cursor-pointer">
          PRODUCT
        </button>
        <button className="font-bold text-white text-sm cursor-pointer ">
          BLOG
        </button>
        <button className="font-bold text-white text-sm cursor-pointer ">
          PAGES
        </button>
        <button className="font-bold text-white text-sm cursor-pointer">
          NEW IN
        </button>
        <button className="font-bold text-white text-sm cursor-pointer ">
          TREND
        </button>
        <button className="font-bold text-white text-sm  cursor-pointer">
          COLLECTIONS
        </button>
        <button className="font-bold text-white text-sm  cursor-pointer">
          BUY ELLA
        </button>
      </div>
    </div>
  );
};

export default Header;
