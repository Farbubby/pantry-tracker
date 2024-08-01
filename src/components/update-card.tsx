import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function UpdateCard() {
  return (
    <>
      <Card className="text-orange-400 bg-gray-950 border border-gray-800">
        <CardHeader>
          <CardTitle>Update item?</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>
            <div className="text-sm max-w-xs">
              Want to add an item in your pantry?
            </div>
          </CardDescription>
        </CardContent>
        <CardFooter className="flex flex-row justify-between">
          <Button
            variant={"ghost"}
            className="border border-gray-800 hover:bg-orange-400 hover:text-black">
            Update
          </Button>
        </CardFooter>
      </Card>
    </>
  );
}
