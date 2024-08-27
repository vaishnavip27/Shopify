import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

export default function SearchBar() {
  return (
    <form className="w-[500px] relative">
      <div className="relative">
        <input
          type="search"
          placeholder="Search ShopEasy"
          className="w-full p-2.5 rounded-full bg-slate-100 text-sm"
        />
        <button className="absolute right-1 top-1/2 -translate-y-1/2 p-2 bg-gray-500 rounded-full">
          <AiOutlineSearch className="text-white" />
        </button>
      </div>
    </form>
  );
}
