import React from "react";
import Image from "next/image";
import { RiShoppingBagFill } from "react-icons/ri";
import { IoIosArrowForward } from "react-icons/io";
import { RiUser3Fill } from "react-icons/ri";
import NavBar from "../components/NavBar";

export default function WishList() {
  return (
    <>
      <NavBar />
      <div className="flex gap-3 justify-center items-start mt-4">
        {/* 1st div */}
        <div className="min-h-[600px] w-[360px]  border border-black flex flex-col gap-3">
          <div className="h-[80px] w-[360px] border border-black flex items-center gap-2">
            <Image
              src="/images/profile.jpg"
              width={54}
              height={54}
              alt="profile-image"
              className="rounded-full ml-2"
            />
            <span className="text-xl font-bold">Hello</span>
          </div>

          <div className="min-h-[700px] w-[360px] border border-orange-500">
            <div className="flex items-center pl-3 border-b border-black p-3">
              <RiShoppingBagFill className="h-6 w-6" />
              <span className="ml-4 flex-grow text-base">MY ORDERS</span>
              <IoIosArrowForward className="h-5 w-5" />
            </div>

            <div>
              <div className="flex items-center p-3 gap-5 border-b border-black">
                <RiUser3Fill className="h-5 w-5" />
                <span>Account Settings</span>
              </div>
              <div className="flex flex-col p-1 gap-4 border-b border-black">
                <span className="pl-12 text-sm">Profile Information</span>
                <span className="pl-12 text-sm">Manage Adresses</span>
                <span className="pl-12 text-sm">PAN Card Information</span>
              </div>
            </div>

            <div>
              <div className="flex items-center p-3 gap-5 border-b border-black">
                <RiUser3Fill className="h-5 w-5" />
                <span>PAYEMENTS</span>
              </div>
              <div className="flex flex-col p-1 gap-4">
                <span className="pl-12 text-sm">Gift Cards</span>
                <span className="pl-12 text-sm">Saved UPI</span>
                <span className="pl-12 text-sm">Saved Cards</span>
              </div>
            </div>

            <div>
              <div className="flex items-center p-3 gap-5 border border-black">
                <RiUser3Fill className="h-5 w-5" />
                <span>MY CARDS</span>
              </div>
              <div className="flex flex-col p-1 gap-4">
                <span className="pl-12 text-sm">My Coupons</span>
                <span className="pl-12 text-sm">My reviews and ratings</span>
                <span className="pl-12 text-sm">All Notifications</span>
                <span className="pl-12 text-sm">Wishlist</span>
              </div>
            </div>
          </div>
        </div>

        {/* 2nd div */}
        <div className="h-[600px] w-[1100px]  border border-black"></div>
      </div>
    </>
  );
}
