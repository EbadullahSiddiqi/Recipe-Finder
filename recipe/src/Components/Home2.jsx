import React from "react";
import { Link } from "react-router-dom";

export default function Home2() {
  return (
    <>
      <section className="text-gray-100 body-font bg-transparent dark:bg-slate-900">
        <div className="container mx-auto flex md:px-24 md:py-10 md:flex-row flex-col items-center">
          <div className="lg:flex-grow mt-5 md:mt-0   md:w-1.5/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center gap-5">
            <h1 className="text-5xl font-bold mb-4">
              Discover delicious <br/>
              <span className="text-yellow-600">
                recipes <br />
              </span>
              for your next meal!
            </h1>

            <div className="flex justify-center">
              <Link
                to="/finder"
                className="inline-flex text-white bg-yellow-600 border-0 py-2 px-6 focus:outline-none hover:bg-emerald-600 rounded text-lg"
              >
                Finder
              </Link>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full mb-5 md:mb-0 md:w-1/2 w-3/6">
            <img
              className="object-cover object-center rounded mt-5"
              alt="hero"
              src="https://www.svgrepo.com/show/490900/hot-air-balloon.svg"
            />
          </div>
        </div>
      </section>
    </>
  );
}
