"use client";
import axios from "axios";
import Link from "next/link";
import React from "react";
import { getCookie, hasCookie, setCookie } from "cookies-next";

export default async function Home() {
  const cookie = getCookie("isLogged");

  if (hasCookie("isLogged")) {
    console.log(getCookie("isLogged"));
  } else {
    setCookie("isLogged", false);
  }

  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/posts"
  );
  const postdata = await response.data;

  return cookie ? (
    <div>
      {postdata.map((element, index) => {
        return (
          <div className="flex flex-col justify-center mb-5 mt-5" key={index}>
            <div className="relative flex flex-col md:flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-xl shadow-lg p-3 max-w-xs md:max-w-3xl mx-auto border border-white bg-white">
              <div className="w-full md:w-1/3 bg-white grid place-items-center">
                <img
                  src="https://placehold.co/512x512"
                  alt="tailwind logo"
                  className="rounded-xl"
                />
              </div>
              <div className="w-full md:w-2/3 bg-white flex flex-col space-y-2 p-3">
                <div className="flex justify-between item-center">
                  <p className="text-gray-500 font-medium hidden md:block">
                    Blog
                  </p>
                </div>
                <h3 className="font-black text-gray-800 md:text-3xl text-xl">
                  {postdata[index].title}
                </h3>
                <p className="md:text-lg text-gray-500 text-base">
                  {postdata[index].body}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  ) : (
    <div className="flex justify-center items-center flex-col">
      <h1 className="">Not Logged In</h1>
      <Link href="/login">Login</Link>
    </div>
  );
}
