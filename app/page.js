"use client";
import axios from "axios";
import Link from "next/link";
import React from "react";
import localStorage from "local-storage";
import { useRouter } from "next/navigation";

export default async function Home() {
  const router = useRouter();

  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/posts"
  );
  const postdata = await response.data;

  var isLogged = localStorage.get("isLogged");
  console.log(isLogged);

  return isLogged ? (
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
                <Link
                  href={{
                    pathname: "/blogs",
                    query: `postid=${postdata[index].id}`,
                  }}
                  className="font-black text-gray-800 md:text-3xl text-xl"
                >
                  {postdata[index].title}
                </Link>
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
