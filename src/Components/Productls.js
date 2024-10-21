"use client";
import Link from "next/link";
import Product from "./Product";
import { useState, useEffect } from "react";
import axios from "axios";

const Productls = () => {
  const [Productitems, setProductitems] = useState([]);
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setProductitems(response.data);
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // const username = "Nana Ama";
  // const age = 20;
  // const email = "nana@gmail.com";

  // function Login() {
  //   const LoginData = {
  //     username,
  //     age,
  //     email
  //   }

  //   // Promise
  //   axios.put("/sdjshjhdjshdjs/login",LoginData).then((response) => {
  //     if (response.data) {
  //       alert("login successfull")
  //     }

  //   }).catch((error) => {
  //     console.log(error);

  //   })
  // }

  //   const Array_category = [
  //     {
  //       id: 2,
  //       CategoryName: "Mens Casual Premium Slim Fit T-Shirts ",
  //       CategoryPrice: "$22",
  //     },
  //     {
  //       id: 3,
  //       CategoryName: "Mens Cotton Jacket",
  //       CategoryPrice: "$59",
  //     },
  //     {
  //       id: 15,
  //       CategoryName: "BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats",
  //       CategoryPrice: "$70",
  //     },
  //     {
  //       id: 17,
  //       CategoryName: "Rain Jacket Women Windbreaker Striped Climbing Raincoats",
  //       CategoryPrice: "$99",
  //     },
  //   ];
  return (
    <div>
      <div className="font-bold text-xl text-[#232323] grid place-items-center mt-16">
        NOW TRENDING
      </div>
      <p className="grid place-items-center">View All</p>
      <div className=" grid place-items-center">
        <div className="border border-[#232323]  w-10"></div>
      </div>
      <div className="grid grid-cols-4 space-x-5 gap-5">
        {Productitems?.map((items) => {
          return (
            <Product
              ProductName={items.title}
              ProductPrice={items.price}
              ProductImage={items.image}
            />
          );
        })}
        {/* {Category?.map((products) => {
          return (
            <Link
              href={{
                pathname: "/Details",
                query: {
                  id: products.id,
                },
              }}
            >
              <Category
                CategoryName={products.title}
                CategoryPrice={products.price}
              />
            </Link>
          );
        })} */}
      </div>
    </div>
  );
};

export default Productls;
