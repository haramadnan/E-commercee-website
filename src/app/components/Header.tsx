'use client';
import Link from "next/link";
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import React, { useState } from "react";



export default function Header() {

  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle dropdown visibility
  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <>
      <div className="bg-[#252B42] ">
        <div className="max-w-[1400px] mx-auto px-[20px] text-white flex justify-between items-center h-[58px]">
          <div className="flex gap-[20px]">

            <div className="flex gap-[5px]">
              <i className="bi bi-telephone"></i>
              <p> (225) 555-0118</p>

            </div>

            <div className="flex gap-[5px]">
              <i className="bi bi-envelope"></i>
              <p>michelle.rivera@example.com</p>
            </div>

          </div>

          <div>
            <p>Follow Us  and get a chance to win 80% off</p>
          </div>

          <div className="flex gap-[5px]">
            <p>Follow Us  :</p>
            <div className="flex gap-[10px]">
              <a href="https://instagram.com"><i className="bi bi-instagram"></i></a>
              <a href="https://youtube.com"><i className="bi bi-youtube"></i></a>
              <a href="https://facebook.com"><i className="bi bi-facebook"></i></a>
              <a href="https://twitter.com"><i className="bi bi-twitter"></i></a>
            </div>

          </div>

        </div>
        <div>

        </div>
      </div>

      <div className="bg-white">
        <div className="max-w-[1400px] mx-auto px-[20px] flex items-center gap-[60px] h-[58px]" >
          <div> 
            <h1 className="font-bold text-[24px]">Bandage</h1>
          </div>
          <div className="flex justify-between w-full">
            <div className="links flex gap-[15px]">
              <Link href="/home">Home</Link>
             
          
              <nav className="flex bg-white p-2">
      <div className="max-w- mx-auto gap-[15px] ">
        <div className="relative flex items-center justify-between h-2">
          {/* Shop Dropdown */}
          <div className="relative inline-block text-left">
            <button
              className="flex items-center text-black hover:text-gray-400"
              onClick={toggleDropdown}  // Toggle dropdown on click
            >
              Shop
              <svg
                className="ml-1 h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {/* Dropdown Menu with Animation */}
            <div
              className={`absolute right-0 mt-2 w-40 bg-white text-black rounded-md shadow-lg transition-all duration-300 ${
                isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
              }`}
              style={{ transitionProperty: 'opacity, transform' }}
            >
              <a
                href="/products"
                className="block px-4 py-2 text-sm hover:bg-gray-100"
              >
                Products
              </a>
              <a
                href="/support"
                className="block px-4 py-2 text-sm hover:bg-gray-100"
              >
                Support
              </a>
              <a
                href="/lisence"
                className="block px-4 py-2 text-sm hover:bg-gray-100"
              >
                Lisence
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
              


              <Link href="/about">About</Link>
              <Link href="/blog">Blog</Link>
              <Link href="/contact">Contact</Link>
              <Link href="/pages">Pages</Link>
              <Link href="/product">Product</Link>


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
            </div>
          </div>
        </div>
        </div>
    </>


  );
}
