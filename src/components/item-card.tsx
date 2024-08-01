import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface ItemProps {
  name: string;
  quantity: number;
}

export default function ItemCard({ name, quantity }: ItemProps) {
  return (
    <>
      <Card className="bg-orange-400">
        <CardHeader>
          <CardTitle>{name}</CardTitle>
          <CardDescription>
            <div className="text-black text-lg">Quantity: [ {quantity} ]</div>
          </CardDescription>
        </CardHeader>
        <CardContent></CardContent>
        <CardFooter className="flex flex-row justify-between">
          <Button
            variant={"ghost"}
            className="hover:bg-gray-950 hover:text-orange-400 duration-200 border border-black">
            Edit
          </Button>
          <Button
            variant={"ghost"}
            className="hover:bg-gray-950 hover:text-orange-400 duration-200 border border-black">
            Delete
          </Button>
        </CardFooter>
      </Card>
      ;
    </>
  );
}
