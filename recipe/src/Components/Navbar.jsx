import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-30 mx-auto w-full max-w-screen-md border border-gray-100 bg-gray-100 py-3 shadow backdrop-blur-lg md:top-6 md:rounded-3xl lg:max-w-screen-lg">
      <div className="px-4">
        <div className="flex items-center justify-between">
          <div className="flex shrink-0">
            <Link to="/" aria-current="page" className="flex items-center">
              <img
                className="h-7 w-auto"
                src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
                alt=""
              />
            </Link>
          </div>
          <div className="hidden md:flex md:items-center md:justify-center md:gap-5">
            <Link
              to="/"
              aria-current="page"
              className="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-800 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
            >
              Home
            </Link>
            <Link
              to="/finder"
              className="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-800 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
            >
              Finder
            </Link>
          </div>
          <div className="flex items-center justify-end gap-3"></div>
        </div>
      </div>
    </header>
  );
}
