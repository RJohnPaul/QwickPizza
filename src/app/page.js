'use client';
import Image from "next/image";
import React from "react";
import Cards from "./menu";
import { motion } from "framer-motion";
import { useRef } from "react";


export default function Home() {
  const pizzamenu = useRef(null);

  const scrollToElement = () => {
    if (pizzamenu.current) {
      pizzamenu.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  
  

  return (
   <motion.div
   initial={{ opacity: 0, y: 10 }}
   animate={{ opacity: 1, y: 0 }}
   transition={{ duration: 0.5 }}
   >
    
    <div className="bg-slate-900">
      <main className="bg-gradient-to-b from-violet-600/[.15] via-transparent flex min-h-screen flex-col items-center justify-between p-24">
        <div className="">
          <div className="">
            <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-24 space-y-8">
              {/* Announcement Banner hehe */}
              <div className="flex justify-center">
                <a
                  className="group inline-block shadow-lg shadow-transparent shadow-violet-700/50 hover:shadow-xl hover:shadow-violet-700/50 duration-500 bg-white/[.05] hover:bg-white/[.1] border border-white/[.05] p-1 pl-4 rounded-full shadow-md"
                  href="https://nextjs.org/"
                  target="_blank"
                >
                  <p className="mr-2 inline-block text-white text-sm transition-all duration-1000">
                    Build with NextJS
                  </p>
                  <span className="group-hover:bg-white/[.1] py-2 px-3 inline-flex justify-center items-center gap-x-2 rounded-full bg-white/[.075] font-semibold text-white text-sm">
                    <svg
                      className="w-2.5 h-2.5"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <path
                        d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                </a>
              </div>
              {/* End Announcement Banner */}

              {/* Title */}
              <div className="max-w-3xl text-center mx-auto">
                <h1 className="block font-medium text-gray-200 text-7xl">
                  <span className="bg-gradient-to-tl from-violet-600 via-violet-800 to-gray-900 bg-clip-text text-transparent font-bold">
                    Qwick
                  </span>
                  🍕
                </h1>
              </div>
              {/* End Title */}

              <div className="max-w-3xl text-center mx-auto">
                <p className="text-lg text-gray-400 font-medium">
                  Fully Functional Food Menu with React Hooks and Tailwindcss
                  and Preline UI.
                </p>
              </div>

              {/* Buttons */}
              <div className="text-center">
                <a
                  onClick={scrollToElement}
                  className="inline-flex justify-center items-center gap-x-3 text-center bg-gradient-to-tl from-blue-700 to-violet-700 transition-all hover:from-blue-600 hover:to-violet-600 shadow-lg shadow-transparent shadow-violet-700/50 hover:shadow-xl hover:shadow-violet-700/50 duration-500 border border-transparent text-white text-sm font-medium rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white py-3 px-6 dark:focus:ring-offset-gray-800" href="#menu">
                
                  Get Started 
                </a>
              </div>
              <div id="menu" ref={pizzamenu}>
                <Cards />
              </div>

              {/* End Buttons */}
            </div>
          </div>
        </div>
      </main>
    </div>
  </motion.div>
  );
}
