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
  return (<div>
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
  </div>)


  // var isLogged = localStorage.get("isLogged");
  // console.log(isLogged);

  // return isLogged ? (
  //   <div>
  //     {postdata.map((element, index) => {
  //       return (
  //         <div className="flex flex-col justify-center mb-5 mt-5" key={index}>
  //           <div className="relative flex flex-col md:flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-xl shadow-lg p-3 max-w-xs md:max-w-3xl mx-auto border border-white bg-white">
  //             <div className="w-full md:w-1/3 bg-white grid place-items-center">
  //               <img
  //                 src="https://placehold.co/512x512"
  //                 alt="tailwind logo"
  //                 className="rounded-xl"
  //               />
  //             </div>
  //             <div className="w-full md:w-2/3 bg-white flex flex-col space-y-2 p-3">
  //               <div className="flex justify-between item-center">
  //                 <p className="text-gray-500 font-medium hidden md:block">
  //                   Blog
  //                 </p>
  //               </div>
  //               <Link
  //                 href={{
  //                   pathname: "/blogs",
  //                   query: `postid=${postdata[index].id}`,
  //                 }}
  //                 className="font-black text-gray-800 md:text-3xl text-xl"
  //               >
  //                 {postdata[index].title}
  //               </Link>
  //               <p className="md:text-lg text-gray-500 text-base">
  //                 {postdata[index].body}
  //               </p>
  //             </div>
  //           </div>
  //         </div>
  //       );
  //     })}
  //   </div>
  // ) 
  // : (
  //   <div className="flex justify-center items-center min-h-screen">
  //     <div className="w-full max-w-md p-6 rounded-lg shadow-lg">
  //       <div role="alert">
  //         <div className="bg-red-500 text-white font-bold rounded-t px-4 py-2">
  //           Not Logged In!
  //         </div>
  //         <div className="border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700">
  //           <p>
  //             To View Website's Content You Have To Log In. This Website Uses
  //             Fake Authentication API To Test Login Functionality, So If You Want
  //             To Log In Use{" "}
  //             <a
  //               className="text-blue-950 font-bold"
  //               href="https://fakeauthentication-api.onrender.com/api/api-docs/#/Static%20Users/post_api_staticUsers_login"
  //             >
  //               Default Credentials
  //             </a>
  //           </p>
  //           <div className="flex justify-center mt-4">
  //             <button className="relative inline-flex items-center justify-center p-0.5 mb-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
  //               <a href="/login" className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
  //                 Login
  //               </a>
  //             </button>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // );
}