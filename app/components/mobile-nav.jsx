"use client";

import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import logo from "@/public/next.svg";
import MenuModal from "./menu-modal";
import { useState } from "react";

const MobileNav = () => {
  const [displayModal, setDisplayModal] = useState(false);
  return (
    <>
      <div className="w-full flex flex-col md:hidden">
        <div className="flex w-full items-center justify-between bg-mainColor px-10">
          <Image
            src={logo}
            width={500}
            height={500}
            alt="Logo"
            className="w-20 h-20 cursor-pointer"
          />
          <Button
            className="!bg-secondaryColor"
            onClick={() => setDisplayModal((prev) => !prev)}
          >
            {!displayModal ? <Menu color="white" /> : <X color="white" />}
          </Button>
        </div>
        <MenuModal modal={displayModal} openModal={setDisplayModal} />
      </div>
    </>
  );
};

export default MobileNav;
