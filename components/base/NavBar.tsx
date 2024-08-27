import React from "react";
import Logo from "./Logo";
import NavMenu from "./NavMenu";

export default function NavBar() {
  return (
    <div className="flex items-center">
      <div>
        <Logo />
      </div>
      <div>
        <NavMenu />
      </div>
    </div>
  );
}
