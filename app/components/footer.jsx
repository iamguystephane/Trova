import Link from "next/link";
import {
  MapPin,
  Mail,
  Phone,
  InstagramIcon,
  FacebookIcon,
  LinkedinIcon,
} from "lucide-react";
export default function Footer() {
  return (
    <>
      <div className="w-full items-center justify-between flex xsm:flex-col md:flex-row bg-mainColor xsm:p-4 md:p-10 text-white">
        <div className="xsm:w-full md:w-1/3 flex flex-col justify-center gap-8">
          <h1 className="border-b-2 border-b-secondaryColor w-fit">About Us</h1>
          <p>
            TROVA is a company that specializes in providing GPS tracking
            solutions for vehicles and assets, be it for an individual or a
            business. We offer a wider range of products and services including
            real-time tracking, alerts, geofencing, and historical route
            reports. We aim to optimize, improve efficiency, and reduce costs.
          </p>
        </div>
        <div className="flex flex-col md:justify-center md:items-center gap-8 xsm:w-full md:w-fit">
          <h1 className="border-b-2 border-b-secondaryColor xsm:mt-8 md:mt-0 w-fit">
            Quick Links
          </h1>
          <ul className="flex flex-col gap-1 xsm:w-full md:w-fit">
            <li>
              <Link href="/"> Home </Link>
            </li>
            <li>
              <Link href="/about"> About Us </Link>
            </li>
            <li>
              <Link href="/contact"> Contact Us </Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col justify-center xsm:w-full md:w-fit">
          <h1 className="border-b-2 border-b-secondaryColor w-fit md:mb-4 xsm:mb-8 md:mt-0 xsm:mt-8">
            Get in touch
          </h1>
          <div className="flex items-center gap-2 mb-4 w-full">
            <MapPin color="orangered" />
            <p> Yaounde, Cameroon </p>
          </div>
          <div className="flex items-center gap-2 mb-4 w-full">
            <Phone color="orangered" />
            <Link href="tel:+237672280977"> 680950038 </Link>
          </div>
          <div className="flex items-center gap-2 w-full">
            <Mail color="orangered" />
            <Link href="mailto:trova@gmail.com"> trovatracking@gmail.com </Link>
          </div>
        </div>
        <div className="flex flex-col justify-center xsm:w-full md:w-fit">
          <h1 className="border-b-2 border-b-secondaryColor w-fit md:mb-4 xsm:mb-8 md:mt-0 xsm:mt-8">
            Our socials
          </h1>
          <div className="flex flex-col justify-center gap-4 w-full">
            <Link href="">
              <div className="flex items-center gap-2">
                <InstagramIcon color="red" /> <p>@trovatracking</p>
              </div>
            </Link>
            <Link href="">
              <div className="flex items-center gap-2">
                <FacebookIcon color="blue" /> <p>@trovatracking</p>
              </div>
            </Link>
            <Link href="">
              <div className="flex items-center gap-2">
                <LinkedinIcon color="blue" /> <p>@trovatracking</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
