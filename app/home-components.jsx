import services from "@/scripts/services";
import ServiceCard from "./components/service-card";
import Values from "./components/values";

export default function HomeComponents() {
  return (
    <div className="w-full">
      <header className="w-full xsm:h-[60vh] md:h-[100vh] bg-[url(/images/header.jpg)] bg-cover bg-center bg-no-repeat">
        <div className="w-full h-full flex flex-col justify-center bg-black/50 px-8">
          <h1 className="text-white font-bold text-[40px] tracking-widest">
            TROVA TECHNOLOGY
          </h1>
          <p className="text-white text-xl"> Find your fleet, find your future. </p>
        </div>
      </header>
      <h1 className="mt-10 text-center w-full text-3xl"> Our Services </h1>
      <p className="w-full text-center">
        We are known for the quality of our services.
      </p>
      <div className="my-10 flex flex-wrap items-center justify-center w-full gap-6 px-8">
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
      <div className='w-full flex items-center justify-center mb-10 bg-blue-200 min-h-[60vh] flex-wrap md:gap-20 px-8 py-10'>
        <Values />
      </div>
    </div>
  );
}
