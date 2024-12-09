"use client";  
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Search, Heart, ShoppingCart, ChevronDown, Menu, X, Mail, PhoneCall } from "lucide-react";



export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [homeDropdownOpen, setHomeDropdownOpen] = useState(false);
  return (
    <>
      <div className="flex justify-between items-center p-4 bg-[#F5F5F5]">
        {/* Left Section - Icon */}
        <div>
          <Image src="/navicon.png" alt="Navigation Icon" width={30} height={30} />
        </div>

        {/* Right Section - Links */}
        <div className="ml-auto">
          <ul className="flex items-center gap-4">
            <li>
              <Link href="/">Find a Store</Link>
            </li>
            <span className="hidden md:block h-5 w-px bg-black"></span>
            <li>
              <Link href="/">Help</Link>
            </li>
            <span className="hidden md:block h-5 w-px bg-black"></span>
            <li>
              <Link href="/">Join us</Link>
            </li>
            <span className="hidden md:block h-5 w-px bg-black"></span>
            <li>
              <Link href="/">Sign in</Link>
            </li>
          </ul>
        </div>
 </div>

 <header className="flex items-center justify-between px-6 py-4 bg-white">
        {/* Left Section - Logo */}
        <div className="flex items-center">
          <Image src="/logo.png" alt="Logo" width={70} height={70} />
        </div>

        {/* Center Section - Links */}
        <nav>
          <ul className="flex space-x-8 text-sm font-medium">
            <li>
              <Link href="/" className="hover:text-pink-500">
                New & Featured
              </Link>
            </li>
            <li>
              <Link href="/men" className="hover:text-pink-500">
                Men
              </Link>
            </li>
            <li>
              <Link href="/women" className="hover:text-pink-500">
                Women
              </Link>
            </li>
            <li>
              <Link href="/kids" className="hover:text-pink-500">
                Kids
              </Link>
            </li>
            <li>
              <Link href="/sale" className="hover:text-pink-500">
                Sale
              </Link>
            </li>
            <li>
              <Link href="/snkrs" className="hover:text-pink-500">
                SNKRS
              </Link>
            </li>
          </ul>
        </nav>

        {/* Right Section - Search Bar and Icons */}
        <div className="flex items-center space-x-6">
          {/* Search Bar */}
          <div className="relative flex items-center border border-gray-300 bg-gray-50 rounded-full">
  {/* Search Icon on Left */}
  <button className="px-3 text-gray-600">
    <Search />
  </button>

  {/* Input Field */}
  <input
    type="text"
    placeholder="Search"
    className="py-2 pl-2 pr-4 w-56 text-sm bg-transparent focus:outline-none"
  />
</div>


          {/* Icons */}
          <Link href="#" className="hover:text-pink-500">
            <Heart className="w-5 h-5" />
          </Link>
          <Link href="#" className="relative hover:text-pink-500">
            <ShoppingCart className="w-5 h-5" />
          </Link>
        </div>
      </header>
    </>
  );
}
