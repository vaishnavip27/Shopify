import { HiOutlineUser } from "react-icons/hi";
import { FaRegHeart } from "react-icons/fa";
import { LuShoppingCart } from "react-icons/lu";

export default function ProfileMenu() {
  return (
    <div className="flex items-center gap-x-4 mr-4">
      <div className="bg-slate-200 p-2 rounded-full">
        <HiOutlineUser />
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
