import WorkshopCard from "@/components/cards/workshop-card";
import { Button } from "@/components/ui/button";
import { bikeWorkshops } from "@/constants/bike-workshop";



const HomePage = () => {
  return (
    <>
      <h2 className="mb-1 font-raleway text-[24px] font-bold">
        Explore Workshop Nearby
      </h2>
      <div className="flex flex-col gap-5 md:flex-row">
        {bikeWorkshops.map((res, idx) => (
          <WorkshopCard
            key={idx}
            image={res.image}
            name={res.name}
            desc={res.description}
          />
        ))}
      </div>
      <div className="mt-5 flex justify-center">
        <Button variant={"outline"}>Discover all workshops nearby</Button>
      </div>
      <h2 className="mb-1 mt-10 font-raleway text-[24px] font-bold">
        Newly Added Workshops
      </h2>
      <div className="flex flex-col gap-5 md:flex-row">
        {bikeWorkshops.map((res, idx) => (
          <WorkshopCard
            key={idx}
            image={res.image}
            name={res.name}
            desc={res.description}
          />
        ))}
      </div>
      <div className="mt-5 flex justify-center">
        <Button variant={"outline"}>Discover newly added workshop</Button>
      </div>
    </>
  );
};

export default HomePage;
