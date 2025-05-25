import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image from "next/image";

const ServiceCard = ({ service }) => {
  return (
    <Card className={`!p-0 xsm:w-full ${service.image ? 'md:w-[300px]' : 'xsm:w-4/5'} ${service.image ? 'min-h-[430px]' : 'h-[300px]'} cursor-pointer transition-all duration-300 ease-in-out hover:-translate-y-5`}>
      <CardHeader className="!p-0">
        {service.image && (
          <Image
            src={service.image}
            width={500}
            height={500}
            alt="Service image"
            className="w-full h-1/2 rounded-tr-lg rounded-tl-lg"
          />
        )}
      </CardHeader>
      <CardContent className="!p-2 flex flex-col justify-center gap-3 pb-8">
        <h1 className="text-lg uppercase"> {service.service} </h1>
        <div className="w-10 h-2 bg-green-500 rounded-lg" />
        <p className="text-sm font-thin">{service.description}</p>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
