import Image from "next/image";
import HomeComponents from "./home-components";

export const metadata = {
  title: "Trova - Home",
  description: "Welcome to TROVA",
};
export default function Home() {
  return <HomeComponents />;
}
