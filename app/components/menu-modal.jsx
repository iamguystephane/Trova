"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function MenuModal({ modal, openModal }) {
  const styles = {
    tab: {
      backgroundColor: "#FF9B45",
      width: "80%",
      height: 2,
      alignSelf: "center",
    },
  };

  const pathname = usePathname();
  return (
    <>
      {modal && (
        <div className="w-full h-70 bg-black text-white">
          <ul className="flex w-full flex-col justify-center gap-6 p-10">
            <li>
              <Link
                href="/"
                style={pathname === "/" ? { color: "orangered" } : {}}
              >
                Home
              </Link>
            </li>
            <div className="w-full h-[1px] bg-white" />
            <li>
              <Link
                href="/about"
                style={pathname === "/about" ? { color: "orangered" } : {}}
              >
                About Us
              </Link>
            </li>
            <div className="w-full h-[1px] bg-white" />
            <li>
              <Link
                href="/contact"
                style={pathname === "/contact" ? { color: "orangered" } : {}}
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}
