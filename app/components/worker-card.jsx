import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import Image from "next/image";

export default function WorkerCard({ worker }) {
  return (
    <Card className="xsm:w-full xsm:min-h-[650px] md:w-[350px] md:min-h-[700px] !p-0 transition-all duration-300 ease-in-out hover:-translate-y-4 cursor-pointer">
      <CardHeader className="!p-0">
        <Image
          src={worker.image}
          width={1000}
          height={1000}
          alt={`${worker.names}'s picture`}
          className="xsm:w-full xsm:h-[350px] md:w-full md:h-[300px] object-cover rounded-tr-lg rounded-tl-lg"
        />
      </CardHeader>
      <CardContent className="p-5 flex justify-center gap-2 flex-col">
        <div>
          <h1> Names: </h1>
          <p className="uppercase text-sm font-thin"> {worker.names} </p>
        </div>
        <div>
          <h1> Role: </h1>
          <p className="uppercase text-sm text-secondaryColor font-thin">{worker.role}</p>
        </div>
        <div>
          <h1> Department: </h1>
          <p className="uppercase text-sm font-thin"> {worker.department} </p>
        </div>
        <div>
          <h1> School: </h1>
          <p className="uppercase text-sm font-thin">{worker.school}</p>
        </div>
        <div className="w-full">
          <h1> Skills: </h1>
          <div className="flex gap-1 flex-wrap">
            {worker.skills.map((skill) => (
              <p className="uppercase text-sm font-thin" key={skill}>
                {skill}
              </p>
            ))}
          </div>
        </div>
        <div className="w-full">
          <h1> Hobbies: </h1>
          <div className="flex gap-1 flex-wrap">
            {worker.hobbies.map((hobby) => (
              <p className="uppercase text-sm font-thin" key={hobby}>
                {hobby}
              </p>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
