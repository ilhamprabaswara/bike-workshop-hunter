import WorkshopCard from "@/components/main-site/workshop-card";
import { Button } from "@/components/ui/button";
import { bikeWorkshops } from "@/constants/bike-workshop";

const HomePage = () => {
  return (
    <>
      <h2 className="font-montserrat mb-1 text-[24px] font-bold">
        Explore Workshop Nearby
      </h2>
      <div className="flex flex-row gap-5 overflow-x-scroll">
        {bikeWorkshops.map((res, idx) => (
          <div key={idx} className="flex-[0_0_300px]">
            <WorkshopCard
              image={res.image}
              name={res.name}
              desc={res.description}
            />
          </div>
        ))}
      </div>
      <div className="mt-5 flex justify-center">
        <Button variant={"outline"}>Discover all workshops nearby</Button>
      </div>
      <h2 className="font-montserrat mb-1 mt-10 text-[24px] font-bold">
        Newly Added Workshops
      </h2>
      <div className="flex flex-row gap-5 overflow-x-scroll">
        {bikeWorkshops.map((res, idx) => (
          <div key={idx} className="flex-[0_0_300px]">
            <WorkshopCard
              image={res.image}
              name={res.name}
              desc={res.description}
            />
          </div>
        ))}
      </div>
      <div className="mt-5 flex justify-center">
        <Button variant={"outline"}>Discover newly added workshop</Button>
      </div>
    </>
  );
};

export default HomePage;
