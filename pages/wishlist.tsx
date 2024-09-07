import React from "react";
import Image from "next/image";
import NavBar from "../components/NavBar";
import { ImBin2 } from "react-icons/im";
import SideProfileMenu from "./sideProfileMenu";

export default function WishList() {
  return (
    <>
      <NavBar />
      <div className="flex gap-3 justify-center items-start mt-4">
        {/* 1st div */}
        <SideProfileMenu />

        {/* 2nd div */}
        <div className="h-[600px] w-[1100px]  border border-black">
          <div className="w-full p-4 text-xl font-bold border-b border-black">
            My Wishlist (12)
          </div>
          {/* cart items */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center border border-black ">
              <div>
                <Image
                  src="/images/vase.png"
                  alt="side picture"
                  width={140}
                  height={80}
                  className="object-cover border border-black"
                />
              </div>
              <div className="pl-12 pr-20">
                <div>Casual furniture home decor</div>
                <div> Rs 799</div>
              </div>
              <div>
                <ImBin2 className="h-6 w-6 ml-96 cursor-pointer" />
              </div>
            </div>
            <div className="flex items-center border border-black ">
              <div>
                <Image
                  src="/images/vase.png"
                  alt="side picture"
                  width={140}
                  height={80}
                  className="object-cover border border-black"
                />
              </div>
              <div className="pl-12 pr-20">
                <div>Casual furniture home decor</div>
                <div> Rs 799</div>
              </div>
              <div>
                <ImBin2 className="h-6 w-6 ml-96 cursor-pointer" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
