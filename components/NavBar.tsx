import React from "react";
import Logo from "./Logo";
import NavMenu from "./NavMenu";
import SearchBar from "./SearchBar";
import ProfileMenu from "./ProfileMenu";

export default function NavBar() {
  return (
    <div className="flex items-center justify-between mt-2 pb-3 border-b-2">
      <div>
        <Logo />
      </div>
      <div>
        <NavMenu />
      </div>
      <div>
        <SearchBar />
      </div>
      <div>
        <ProfileMenu />
      </div>
    </div>
  );
}
