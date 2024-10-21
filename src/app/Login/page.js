"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const page = () => {
  const router = useRouter();
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [loading, setloading] = useState(false);
  
  function userhome() {
    router.push("/")
  }

  function handleemailChange(e) {
    setemail(e.target.value);
  }
  function handlepasswordChange(e) {
    setpassword(e.target.value);
  }

  function LoginUser() {
    setloading(true);
    const loginDetails = {
      email,
      password,
      client: "PRIMUS",
    };
    axios
      .post("http://165.22.70.167:9100/apicore/v1/users/auth", loginDetails, {
        headers: {
          username: "user",
          password: "user",
        },
      })
      .then((response) => {
        if (response.data) {
          setloading(false);
          alert("Login Successfully");
        }
        console.log(response.data);
      })
      .catch((err) => {
        setloading(false);
        console.log(err);
      });
  }
  return (
    <div className=" pl-5">
      <div className="text-[#232323]">
        <h1 onClick={userhome} className="font-bold mt-6 cursor-pointer  ">Login</h1>
      </div>
      <div className=" mt-4">
        <p> Email Address*</p>
        <input
          onChange={handleemailChange}
          value={email}
          type="email"
          placeholder="Email Address"
          className=" px-11 py-2 border border-slate-600 mt-2 text-sm"
        />
      </div>

      <div className=" mt-4">
        <p>Password *</p>
        <input
          onChange={handlepasswordChange}
          value={password}
          type="password"
          placeholder="password"
          className="px-11 py-2 border border-slate-600 mt-2  text-sm"
        />
      </div>
      <button
        onClick={userhome}
        className="text-white bg-[#232323] hover:text-[#232323] hover:bg-white border border-[#232323] font-bold text-sm px-28 py-2 mt-3"
      >
        {loading ? "LOGGING IN" : "LOG IN"}
      </button>
      <p className="mt-2 text-[#232323] pl-14">Forgot password?</p>
      <div className="pl-16">
        <p className="border border-slate-800 w-24 pl-28"></p>
      </div>
      <button className="text-[#232323] bg-white hover:text-white hover:bg-[#232323] border border-[#232323] font-bold text-sm px-20 py-4 mt-3">
        CREATE ACCOUNT
      </button>
    </div>
  );
};

export default page;
