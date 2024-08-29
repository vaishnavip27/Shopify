"use client";

import React, { useState } from "react";
import { HiOutlineUser } from "react-icons/hi";
import { FaRegHeart } from "react-icons/fa";
import { LuShoppingCart } from "react-icons/lu";
import { useRouter } from "next/navigation";

export default function ProfileMenu() {
  const [showMenu, setShowMenu] = useState(false);
  const router = useRouter();

  const handleLoginClick = () => {
    router.push("/loginPage");
  };

  const handleWishlistClick = () => {
    router.push("/wishlist");
  };

  return (
    <div className="relative flex items-center gap-x-4 mr-4">
      <div
        className="relative bg-slate-200 p-2 rounded-full cursor-pointer"
        onMouseEnter={() => setShowMenu(true)}
        onMouseLeave={() => setShowMenu(false)}
      >
        <HiOutlineUser />
        {showMenu && (
          <div className="absolute -m-48 mt-2 w-72 bg-white border border-gray-300 rounded-lg shadow-lg z-10 flex flex-col">
            <div className="flex flex-col gap-1 justify-start px-4 py-4">
              <h2 className="text-sm font-bold ">Welcome</h2>
              <p className="text-xs text-gray-700">
                To access account and manage orders
              </p>
              <button
                className="text-sm font-extrabold border-2 border-gray-300 text-left mt-2 w-[150px] p-2 rounded-sm"
                onClick={handleLoginClick}
              >
                LOGIN/SIGNUP
              </button>
            </div>
            <div className="block w-full text-left px-4 py-2 text-xs text-gray-700 hover:bg-gray-100 hover:font-bold">
              User Profile
            </div>
            <div className="block w-full text-left px-4 py-2 text-xs text-gray-700 hover:bg-gray-100 hover:font-bold">
              Settings
            </div>
            <div className="block w-full text-left px-4 py-2 text-xs text-gray-700 hover:bg-gray-100 hover:font-bold">
              Logout
            </div>
          </div>
        )}
      </div>
      <div
        className="bg-slate-200 p-2 rounded-full"
        onClick={handleWishlistClick}
      >
        <FaRegHeart />
      </div>
      <div className="bg-slate-200 p-2 rounded-full">
        <LuShoppingCart />
      </div>
    </div>
  );
}
