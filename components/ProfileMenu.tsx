"use client";

import React, { useState } from "react";
import { HiOutlineUser } from "react-icons/hi";
import { FaRegHeart } from "react-icons/fa";
import { LuShoppingCart } from "react-icons/lu";

export default function ProfileMenu() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="relative flex items-center gap-x-4 mr-4">
      <div
        className="relative bg-slate-200 p-2 rounded-full cursor-pointer"
        onMouseEnter={() => setShowMenu(true)}
        onMouseLeave={() => setShowMenu(false)}
      >
        <HiOutlineUser />
        {showMenu && (
          <div className="absolute mt-2 w-[260px] bg-white border -ml-32 border-gray-300 rounded-sm shadow-lg p-4 ">
            {/* Content of the div */}
            <p className="text-sm text-gray-700">User Profile</p>
            <p className="text-sm text-gray-700">Settings</p>
            <p className="text-sm text-gray-700">Logout</p>
          </div>
        )}
      </div>
      <div className="bg-slate-200 p-2 rounded-full">
        <FaRegHeart />
      </div>
      <div className="bg-slate-200 p-2 rounded-full">
        <LuShoppingCart />
      </div>
    </div>
  );
}
