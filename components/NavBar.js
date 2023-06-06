"use client";
import React from "react";
import Link from "next/link";
import { FaBars } from "react-icons/fa";
import { AiFillCloseSquare } from "react-icons/ai";

function NavBar() {
  const [navBarOpen, setNavBarOpen] = React.useState(false);
  return (
    <div className="py-3 px-10 mx-0 bg-blue4 flex items-center">
      <div id="navBrand">
        <p className="text-2xl">
          <a href="/">Lazyless</a>
        </p>
      </div>
      <div id="navCollapse" className="w-full flex">
        <div id="navLinks" className="flex mx-auto">
          <Link href="/" passHref legacyBehavior>
            <p className="text-xl mx-5 cursor-pointer">Home page</p>
          </Link>
          <Link href="/" passHref legacyBehavior>
            <p className="text-xl mx-3 cursor-pointer">Work Task</p>
          </Link>
          <Link href="/" passHref legacyBehavior>
            <p className="text-xl mx-3 cursor-pointer">Day log</p>
          </Link>
          <Link href="/about" passHref legacyBehavior>
            <p className="text-xl mx-3 cursor-pointer">About</p>
          </Link>
        </div>
        <div id="logInLogOut">
          <Link href="/authentication" passHref legacyBehavior>
            <p className="text-xl mx-3 cursor-pointer">Log in / Sign up</p>
          </Link>
        </div>
      </div>
      <div className="bar hidden">
        {!navBarOpen && (
          <FaBars
            className="cursor-pointer"
            onClick={() => setNavBarOpen(!navBarOpen)}
          />
        )}
        {navBarOpen && (
          <AiFillCloseSquare
            className="cursor-pointer"
            onClick={() => setNavBarOpen(!navBarOpen)}
          />
        )}
      </div>
    </div>
  );
}

export default NavBar;
