import ServiceCard from "./service-card";

export default function Values() {
  const ourValues = [
    {
      id: 1,
      service: "security and reliability",
      description:
        "Our GPS tracking system is designed to be very reliable, to  ensure the  security and constant tracking of your assets.",
    },
    {
      id: 2,
      service: "24/7 support",
      description:
        "We provide round-the-clock assistance to our customers, ensuring their needs are met at any given time. This level of support reduces downtime and maximizes operational efficiency by promptly addressing technical issues.",
    },
  ];
  return (
    <>
      <div className="flex items-center justify-center md:w-1/2 gap-3 flex-wrap">
        {ourValues.map((value) => (
          <ServiceCard key={value.id} service={value} />
        ))}
      </div>
      <div className='flex flex-col justify-center gap-2 flex-wrap '>
        <h1 className='text-[50px] text-white'> Our Values </h1>
        <div className="w-10 h-2 bg-green-500 rounded-lg" />
        <p> We Provide Opportunities to Succeed </p>
      </div>
    </>
  );
}
