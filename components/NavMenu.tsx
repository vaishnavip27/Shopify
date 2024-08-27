import React from "react";
import { Menubar } from "./ui/menubar";
import {
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
} from "./ui/menubar";
import Link from "next/link";

export default function NavMenu() {
  return (
    <div>
      <Menubar className="rounded-s-lg">
        <MenubarMenu>
          <Link href="/men" passHref legacyBehavior>
            <MenubarTrigger className="rounded-s-lg">Men</MenubarTrigger>
          </Link>
          <MenubarContent>
            <MenubarItem>New Tab</MenubarItem>
            <MenubarItem>New Window</MenubarItem>
            <MenubarItem>Open...</MenubarItem>
            <MenubarItem>Save</MenubarItem>
          </MenubarContent>
        </MenubarMenu>

        <MenubarMenu>
          <Link href="/women" passHref legacyBehavior>
            <MenubarTrigger className="rounded-s-lg">Women</MenubarTrigger>
          </Link>
          <MenubarContent>
            <MenubarItem>New Tab</MenubarItem>
            <MenubarItem>New Window</MenubarItem>
            <MenubarItem>Open...</MenubarItem>
            <MenubarItem>Save</MenubarItem>
          </MenubarContent>
        </MenubarMenu>

        <MenubarMenu>
          <Link href="/kids" passHref legacyBehavior>
            <MenubarTrigger className="rounded-s-lg">Kids</MenubarTrigger>
          </Link>
          <MenubarContent>
            <MenubarItem>New Tab</MenubarItem>
            <MenubarItem>New Window</MenubarItem>
            <MenubarItem>Open...</MenubarItem>
            <MenubarItem>Save</MenubarItem>
          </MenubarContent>
        </MenubarMenu>

        <MenubarMenu>
          <Link href="/living" passHref legacyBehavior>
            <MenubarTrigger className="rounded-s-lg">
              Home and Living
            </MenubarTrigger>
          </Link>
          <MenubarContent>
            <MenubarItem>New Tab</MenubarItem>
            <MenubarItem>New Window</MenubarItem>
            <MenubarItem>Open...</MenubarItem>
            <MenubarItem>Save</MenubarItem>
          </MenubarContent>
        </MenubarMenu>

        <MenubarMenu>
          <Link href="/beauty" passHref legacyBehavior>
            <MenubarTrigger className="rounded-s-lg">Beauty</MenubarTrigger>
          </Link>
          <MenubarContent>
            <MenubarItem>New Tab</MenubarItem>
            <MenubarItem>New Window</MenubarItem>
            <MenubarItem>Open...</MenubarItem>
            <MenubarItem>Save</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    </div>
  );
}
