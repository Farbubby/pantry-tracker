import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ItemContext } from "@/context/item";
import UpdateButton from "./update-button";
import DeleteButton from "./delete-button";

interface ItemProps {
  name: string;
  quantity: number;
}

export default function ItemCard({ name, quantity }: ItemProps) {
  return (
    <>
      <Card className="bg-gray-950 text-orange-400 border-gray-800">
        <CardHeader>
          <CardTitle>{name}</CardTitle>
          <CardDescription>
            <div className="text-sm">Quantity: [ x{quantity} ]</div>
          </CardDescription>
        </CardHeader>
        <CardContent></CardContent>
        <CardFooter className="flex flex-wrap gap-4">
          <ItemContext.Provider value={{ name, quantity }}>
            <UpdateButton />
            <DeleteButton />
          </ItemContext.Provider>
        </CardFooter>
      </Card>
    </>
  );
}
