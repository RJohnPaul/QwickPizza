"use client";
import { createContext } from "react";
import { useState } from "react";

const Context = createContext();
import React from "react";
import { useClient } from "react-fetching-library";

const Cards = () => {
  const client = useClient();

  const pizzalist = [
    {
      line: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-1 h-1"
        >
          {/* Your SVG path for the first feature line */}
        </svg>
      ),
      title: "Italian Margherita Pizza",
      desc: "Enjoy the classic flavors of Italy with the Margherita pizza. It's a simple yet delicious combination.",
      image:
        "https://imgs.search.brave.com/2IsakTrBfDByeL-gFMddxgsLFL8PvNYFnUy-FPtoqbw/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jb29r/aWVhbmRrYXRlLmNv/bS9pbWFnZXMvMjAy/MS8wNy9ob21lbWFk/ZS1tYXJnaGVyaXRh/LXBpenphLmpwZw",
    },
    {
      line: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-1 h-1"
        >
          {/* Your SVG path for the second feature line */}
        </svg>
      ),
      title: "New York-Style Pizza",
      desc: "Indulge in the iconic New York-style pizza known for its large, thin, and foldable slices. Toppings vary, but it's always delicious.",
      image:
        "https://imgs.search.brave.com/CJ0EkQfLxb0hlP6XeiHB-FLVmW9pEpo045I9TQ5z04E/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/dGFzdGVvZmhvbWUu/Y29tL3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDIxLzAxL05ldy1Z/b3JrLVN0eWxlLVBp/enphX0VYUFNfRlQy/MF8xMDU1NzhfRl8x/MjE3XzEtMS5qcGc_/Zml0PTcwMCwxMDI0",
    },
    {
      line: (
        <svg
          xmlns="http://w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-1 h-1"
        >
          {/* Your SVG path for the third feature line */}
        </svg>
      ),
      title: "Neapolitan Pizza",
      desc: "Savor the original Neapolitan pizza from Naples, Italy. Known for its simplicity, it features tomatoes, mozzarella, basil, and olive oil.",
      image:
        "https://t3.ftcdn.net/jpg/05/32/76/94/360_F_532769492_B3iTGsExmsWWDV468OUmuQlefrS4McLM.jpg",
    },
    {
      line: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-1 h-1"
        >
          {/* Your SVG path for the fourth feature line */}
        </svg>
      ),
      title: "Chicago Deep-Dish Pizza",
      desc: "Try the hearty Chicago deep-dish pizza, a thick, pie-like crust loaded with cheese, toppings, and a chunky tomato sauce.",
      image:
        "https://sallysbakingaddiction.com/wp-content/uploads/2014/12/best-chicago-style-pizza-recipe.jpg",
    },
    {
      line: (
        <svg
          xmlns="http://w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-1 h-1"
        >
          {/* Your SVG path for the fifth feature line */}
        </svg>
      ),
      title: "Margarita Pizza from Spain",
      desc: "Experience the Spanish Margarita pizza, featuring a thin crust, tomatoes, cheese, and fresh oregano. A Mediterranean delight.",
      image:
        "https://cdn.loveandlemons.com/wp-content/uploads/2023/07/margherita-pizza-recipe.jpg",
    },
    {
      line: (
        <svg
          xmlns="http://w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-1 h-1"
        >
          {/* Your SVG path for the sixth feature line */}
        </svg>
      ),
      title: "Hawaiian Pizza",
      desc: "Travel to Hawaii with the Hawaiian pizza, topped with ham, pineapple, and a blend of mozzarella and cheddar cheeses.",
      image:
        "https://static01.nyt.com/images/2023/03/29/multimedia/23HAMREX2-pineapple-ham-pizza-qwct/HAMREX2-pineapple-ham-pizza-qwct-articleLarge.jpg?w=1280&q=75",
    },
    {
      line: (
        <svg
          xmlns="http://w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-1 h-1"
        >
          {/* Your SVG path for the seventh feature line */}
        </svg>
      ),
      title: "Greek Pizza",
      desc: "Taste the flavors of Greece with Greek pizza, featuring olives, feta cheese, tomatoes, onions, and a drizzle of olive oil.",
      image:
        "https://www.bacinos.com/wp-content/uploads/2021/06/32-Best-Greek-Pizza-Recipes.jpg",
    },
    {
      line: (
        <svg
          xmlns="http://w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-1 h-1"
        >
          {/* Your SVG path for the eighth feature line */}
        </svg>
      ),
      title: "Indian Paneer Pizza",
      desc: "Enjoy the spicy and flavorful Indian Paneer pizza, loaded with paneer cheese, bell peppers, and a blend of spices.",
      image:
        "https://www.cookwithmanali.com/wp-content/uploads/2016/02/Indian-Pizza-1.jpg",
    },
    {
      line: (
        <svg
          xmlns="http://w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-1 h-1"
        >
          {/* Your SVG path for the ninth feature line */}
        </svg>
      ),
      title: "Japanese Okonomiyaki Pizza",
      desc: "Experience the Japanese Okonomiyaki pizza, a savory pancake-like pizza with various toppings, mayonnaise, and bonito flakes.",
      image:
        "https://www.closetcooking.com/wp-content/uploads/2009/05/Okonomiyaki-1-500.jpg",
    },
    {
      line: (
        <svg
          xmlns="http://w3.org/2000/svg"
          fill="non
          e"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-1 h-1"
        >
          {/* Your SVG path for the tenth feature line */}
        </svg>
      ),
      title: "Turkish Lahmacun",
      desc: "Savor the Turkish Lahmacun, a thin and crispy pizza-like dish topped with minced meat, vegetables, and aromatic spices.",
      image:
        "https://i0.wp.com/iran-cuisine.com/wp-content/uploads/2022/11/Lahmacun-1.jpg?fit=1137,1061&ssl=1",
    },
  ];

  const PizzaList = () => {
    return (
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {pizzalist.map((pizza, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-md transition duration-300 hover:shadow-lg"
          >
            <div className="flex items-center">
              {pizza.line}
              <h3 className="ml-3 text-xl font-medium text-gray-900">
                {pizza.title}
              </h3>
            </div>
            <p className="mt-4 text-base text-gray-600">{pizza.desc}</p>
            <img
              src={pizza.image}
              alt={pizza.title}
              className="mt-4 w-full h-auto"
            />
          </div>
        ))}
      </div>
    );
  };

  const [counts, setCounts] = useState(Array(pizzalist.length).fill(0)); // Initialize counts array

  const plus = (index) => {
    const updatedCounts = [...counts];
    updatedCounts[index] += 1;
    setCounts(updatedCounts);
  };
  
  const minus = (index) => {
    const updatedCounts = [...counts];
    if (updatedCounts[index] > 0) {
      updatedCounts[index] -= 1;
      setCounts(updatedCounts);
    }
  };

  return (
    <div className="">
      <div className="max-w-xl mx-auto text-center space-y-10">
        <h2 className="bg-gradient-to-t from-violet-600 via-violet-800 to-violet-900 bg-clip-text text-transparent font-semibold lg:text-6xl text-4xl">
          Choose the Slice You Love Most ❤️
        </h2>
        <p className="mt-3 text-violet-500 xs:text-xl sm:text-xl text-xl">
          Experience innovation at its finest with Worldwide Pizza Collections
          at <span className="font-bold">Qwick🍕</span>{" "}
        </p>
      </div>

      <div className="relative mt-12">
        <ul className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3">
          {pizzalist.map((item, idx) => (
            <li
              key={idx}
              className="shadow-lg shadow-transparent shadow-violet-700/50 hover:shadow-xl hover:shadow-violet-700/50 duration-500 rounded-xl p-4 border border-violet-600 bg-violet-900 bg-opacity-20 transition-all duration-800"
            >
              <div className="flex items-center justify-center space-y-3 p-4 rounded-xl overflow-hidden mb-2">
                <img
                  className="w-60 h-60 rounded-xl object-cover shadow-md shadow-transparent shadow-violet-500"
                  src={item.image}
                  alt={item.title}
                />
              </div>

              <div className="flex items-center justify-center bg-violet-700 rounded-lg text-gray-50 mb-3">
                {item.line}
              </div>
              <h3 className="text-lg text-violet-500 font-semibold mb-2 justify-center items-center flex">
                {item.title}
              </h3>
              <p className="text-violet-400 mb-5">{item.desc}</p>
              <div className="flex flex-wrap justify-center items-center bg-gray-600/30 mb-3 px-2 py-2 rounded-2xl border border-gray-600/30">
                <p className="text-gray-300">Ordered : {counts[idx]}</p>
              </div>
              <div className="flex justify-between">
                <button
                  type="button"
                  className="py-2 px-9 inline-flex justify-center items-center gap-2 rounded-full border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-purple-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
                  onClick={() => minus(idx)}
                >
                  -
                </button>
                <button
                  type="button"
                  className="py-2 px-9 inline-flex justify-center items-center gap-2 rounded-full border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-purple-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
                  onClick={() => plus(idx)}

                >
                  +
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Cards;
