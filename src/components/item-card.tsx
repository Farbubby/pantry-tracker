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
import DeleteButton from "@/components/delete-button";

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
            <div className="text-sm">Quantity: [ {quantity} ]</div>
          </CardDescription>
        </CardHeader>
        <CardContent></CardContent>
        <CardFooter className="flex flex-row gap-20">
          <ItemContext.Provider value={{ name, quantity }}>
            <DeleteButton />
          </ItemContext.Provider>
          {/* <Button
            variant={"ghost"}
            className="hover:bg-orange-400 duration-200 border border-gray-800 fill-orange-400 hover:fill-gray-950">
            <svg
              className="h-6 w-6"
              clip-rule="evenodd"
              fill-rule="evenodd"
              stroke-linejoin="round"
              stroke-miterlimit="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="m11 11h-7.25c-.414 0-.75.336-.75.75s.336.75.75.75h7.25v7.25c0 .414.336.75.75.75s.75-.336.75-.75v-7.25h7.25c.414 0 .75-.336.75-.75s-.336-.75-.75-.75h-7.25v-7.25c0-.414-.336-.75-.75-.75s-.75.336-.75.75z"
                fill-rule="nonzero"
              />
            </svg>
          </Button>
          <Button
            variant={"ghost"}
            className="hover:bg-orange-400 duration-200 border border-gray-800 fill-orange-400 hover:fill-gray-950">
            <svg
              className="h-6 w-6"
              clip-rule="evenodd"
              fill-rule="evenodd"
              stroke-linejoin="round"
              stroke-miterlimit="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="m21 11.75c0-.414-.336-.75-.75-.75h-16.5c-.414 0-.75.336-.75.75s.336.75.75.75h16.5c.414 0 .75-.336.75-.75z"
                fill-rule="nonzero"
              />
            </svg>
          </Button> */}
        </CardFooter>
      </Card>
      ;
    </>
  );
}
