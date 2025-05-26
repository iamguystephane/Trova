"use client";

import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import logo from "../../public/images/logo.jpg";
import MenuModal from "./menu-modal";
import { useState } from "react";

const MobileNav = () => {
  const [displayModal, setDisplayModal] = useState(false);
  return (
    <>
      <div className="w-full flex flex-col md:hidden">
        <div className="flex w-full items-center justify-between bg-mainColor px-10 py-4">
          <Image
            src={logo}
            width={500}
            height={500}
            alt="Logo"
            className="w-14 h-14 cursor-pointer rounded-full"
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
