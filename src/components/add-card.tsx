import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import AddButton from "@/components/add-button";

export default function AddCard() {
  return (
    <>
      <Card className="text-orange-400 bg-gray-950 border border-gray-800">
        <CardHeader>
          <CardTitle>Add item?</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>
            <div className="text-sm max-w-xs">
              Want to add an item to your pantry?
            </div>
          </CardDescription>
        </CardContent>
        <CardFooter className="flex flex-row justify-between">
          <AddButton />
          <Button
            variant={"ghost"}
            className="border border-gray-800 hover:bg-orange-400 hover:text-black">
            Take a picture
          </Button>
        </CardFooter>
      </Card>
    </>
  );
}
