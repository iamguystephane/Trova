"use client";

import { usePathname } from "next/navigation";
import ContactCard from "./contact-card";
import { MapPin, Phone, Mail } from "lucide-react";
import ContactForm from "./contact-form"
import Link from 'next/link'

export default function ContactComponents() {
  const pathname = usePathname();
  return (
    <div className="w-full flex flex-col justify-center px-8 p-3">
      <div className="flex w-full items-center gap-2 text-lg">
        <Link href='/'> Home </Link>
        <p> / </p>
        <Link href='/contact' style={pathname === '/contact' ? {color: 'orangered', fontWeight: 600} : {}}> Contact </Link>
      </div>
      <h1 className="my-10 text-secondaryColor text-2xl"> Contact Us </h1>
      <div className="flex flex-wrap items-center justify-center w-full gap-4">
        <ContactCard Icon={MapPin} content="Yaounde, Cameroon"/>
        <ContactCard Icon={Phone} content="672280977" />
        <ContactCard Icon={Mail} content="trovatracking@gmail.com" />
      </div>
      <div className="md:w-1/2 xsm:w-full">
        <h1 className="mt-10 text-lg uppercase text-secondaryColor"> We want to hear from you. </h1>
        <p className="mb-10"> Please fill in the form to get in touch with us. All fields are required</p>
        <ContactForm />
      </div>
    </div>
  );
}
