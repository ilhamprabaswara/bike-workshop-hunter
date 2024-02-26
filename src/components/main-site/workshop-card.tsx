import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";

const WorkshopCard = ({ name, desc, content, image }: any) => {
  return (
    <Card className="overflow-clip">
      <Image alt="" src={image} />
      <CardHeader>
        <CardTitle>{name}</CardTitle>
        <CardDescription>{desc}</CardDescription>
      </CardHeader>
      <CardContent>
        <p>{content}</p>
      </CardContent>
    </Card>
  );
};

export default WorkshopCard;
