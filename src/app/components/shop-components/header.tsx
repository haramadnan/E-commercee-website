
"use client";
import Link from "next/link";
import React, { useState } from "react";
import {
  FiArrowRight,
  FiMenu,
  FiX,
  FiSearch,
  FiShoppingCart,
} from "react-icons/fi";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prevState) => !prevState);
  };

  return (
    <header className="bg-white shadow-md py-4">
      <div className="container mx-auto flex items-center justify-between px-4">
        {/* Logo */}
        <div className="text-[24px] font-bold text-[#252B42] mr-8">
          {" "}
          {/* Add mr-8 for margin-right */}
          Bandage
        </div>

        {/* Navbar (Desktop) */}
        <nav className="hidden md:flex flex-row items-center gap-8 text-[14px] text-[#737373] font-bold ml-20">
          <ul className="list-none flex gap-8">
            {" "}
            {/* Add list-none here to remove dots */}
            <Link href="/">
              <li className="cursor-pointer hover:text-[#23A6F0] transition-all">
                Home
              </li>
            </Link>
            <Link href="/product">
              <li className="cursor-pointer hover:text-[#23A6F0] transition-all">
                Product
              </li>
            </Link>
            <Link href="/pricing">
              <li className="cursor-pointer hover:text-[#23A6F0] transition-all">
                Pricing
              </li>
            </Link>
            <Link href="/contact">
              <li className="cursor-pointer hover:text-[#23A6F0] transition-all">
                Contact
              </li>
            </Link>
          </ul>
        </nav>

        {/* Icons and Buttons */}
        <div className="flex items-center gap-4 ml-auto">
          {/* Search Icon (Hidden on desktop) */}
          <button className="md:hidden flex items-center justify-center p-2  text-[#252B42] hover:text-[#23A6F0] hover:border-[#23A6F0] transition-all">
            <FiSearch size={20} />
          </button>

          {/* Add to Cart Icon (Hidden on desktop) */}
          </div>
            <div className="flex gap-[15px] text-[#23A6F0]">
              <div className="font-bold" >
                <Link href="/">Login /</Link>
                <Link href="/"> Register</Link>
              </div>
              <div className="flex gap-[10px]">
                <button> <i className="bi bi-search"></i>
                </button>
                <button className="flex gap-[5px]">
                  <i className="bi bi-cart"></i>
                  <p className="m-0 p-0 font-normal">1</p>
                </button>
                <button className="flex gap-[5px]">
                  <i className="bi bi-heart"></i>
                  <p className="m-0 p-0 font-normal">1</p>
                </button>

</div>
          {/* Mobile Hamburger Menu (Appears at the end on mobile) */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMobileMenu} className="text-[#252B42]">
              {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu (Appears when hamburger icon is clicked) */}
      <div
        className={`md:hidden ${
          isMobileMenuOpen ? "block" : "hidden"
        } bg-white shadow-md mt-4 px-4 py-6 flex justify-center items-center x`}
      >
        <ul className="list-none flex flex-col gap-4 text-[20px] text-[#737373] font-bold">
          {" "}
          {/* Add list-none here too */}
          <Link href="/">
            <li className="cursor-pointer hover:text-[#23A6F0] transition-all">
              Home
            </li>
          </Link>
          <Link href="/product">
            <li className="cursor-pointer hover:text-[#23A6F0] transition-all">
              Product
            </li>
          </Link>
          <Link href="/pricing">
            <li className="cursor-pointer hover:text-[#23A6F0] transition-all">
              Pricing
            </li>
          </Link>
          <Link href="/contact">
            <li className="cursor-pointer hover:text-[#23A6F0] transition-all">
              Contact
            </li>
          </Link>
        </ul>
      </div>
    
    </header>
  );
};

export default Header;
