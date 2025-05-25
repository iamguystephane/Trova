import WorkerCard from "../components/worker-card";
import workers from "@/scripts/workers";


export const metadata = {
  title: "Trova - About",
  description: "View all information about the workers behind the success of TROVA",
}
export default function About() {
  return (
    <div className="w-full px-8">
      <div>
        <h1 className="text-2xl font-bold my-8"> Who we </h1>
        <p>
          TROVA is a reputable company known for its exceptional GPS tracking
          services. With a strong focus on security and accuracy, we offer a
          wide range of tracking solutions for individuals and businesses alike.
          TROVA’s cutting-edge technology ensures real-time location tracking,
          making it an invaluable tool for asset management and fleet
          monitoring. With our user-friendly interface and reliable customer
          support, TROVA is the go-to choice for those seeking reliable GPS
          tracking services.
        </p>
      </div>
      <div className="flex flex-col w-full justify-center">
        <h1 className="text-2xl font-bold my-8">
          Meet our
          <span className="text-secondaryColor"> amazing team</span>
        </h1>
        <div className="mb-10 w-full flex items-center justify-center flex-wrap gap-5">
          {workers.map((worker) => (
            <WorkerCard key={worker.id} worker={worker} />
          ))}
        </div>
      </div>
    </div>
  );
}
