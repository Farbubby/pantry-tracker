import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import RecipeGenButton from "@/components/recipe-gen-button";

export default function RecipeGenCard() {
  return (
    <>
      <Card className="text-orange-400 bg-gray-950 border border-gray-800">
        <CardHeader>
          <CardTitle>Need recipes?</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>
            <div className="text-sm max-w-xs">
              Want to find recipes based on your pantry?
            </div>
          </CardDescription>
        </CardContent>
        <CardFooter className="flex flex-row justify-between">
          <RecipeGenButton />
        </CardFooter>
      </Card>
    </>
  );
}
