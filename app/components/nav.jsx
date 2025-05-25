"use client";

import Link from "next/link";
import Image from "next/image";
import logo from "@/public/next.svg";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

export default function Nav() {
  const router = useRouter();
  const pathname = usePathname();

  const styles = {
    tab: {
      backgroundColor: "#FF9B45",
      width: "80%",
      height: 2,
      alignSelf: "center",
    },
  };

  return (
    <div className="flex items-center justify-between w-full px-10 bg-mainColor text-white xsm:hidden md:flex">
      <Image
        src={logo}
        width={500}
        height={500}
        alt="Logo"
        className="w-20 h-20 cursor-pointer"
        onClick={() => router.push("/")}
      />
      <ul className="flex items-center justify-center gap-6">
        <li className="group flex flex-col items-center justify-center">
          <Link href="/"> Home </Link>
          <div
            style={pathname === "/" ? styles.tab : {}}
            className={`h-[2px] w-0 bg-secondaryColor transition-all duration-300 ease-in-out group-hover:w-3/4`}
          />
        </li>
        <li className="group flex flex-col items-center justify-center">
          <Link href="/about"> About Us </Link>
          <div
            style={pathname === "/about" ? styles.tab : {}}
            className={`h-[2px] w-0 bg-secondaryColor transition-all duration-300 ease-in-out group-hover:w-3/4`}
          />
        </li>
        <li className="group flex flex-col items-center justify-center">
          <Link href="/contact"> Contact Us </Link>
          <div
            style={pathname === "/contact" ? styles.tab : {}}
            className={`h-[2px] w-0 bg-secondaryColor transition-all duration-300 ease-in-out group-hover:w-3/4`}
          />
        </li>
      </ul>
    </div>
  );
}
