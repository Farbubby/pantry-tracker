import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import DeleteButton from "@/components/delete-button";

export default function RemoveCard() {
  return (
    <>
      <Card className="text-orange-400 bg-gray-950 border border-gray-800">
        <CardHeader>
          <CardTitle>Delete item?</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>
            <div className="text-sm max-w-xs">
              Want to delete an item from your pantry?
            </div>
          </CardDescription>
        </CardContent>
        <CardFooter className="flex flex-row justify-between">
          <DeleteButton />
        </CardFooter>
      </Card>
    </>
  );
}
