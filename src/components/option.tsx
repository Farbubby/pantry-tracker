import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface OptionProps {
  title: string;
  description: string;
  buttonText1: string;
  buttonText2?: string;
}

export default function Option({
  title,
  description,
  buttonText1,
  buttonText2,
}: OptionProps) {
  return (
    <>
      <Card className="text-orange-400 bg-gray-950 border border-gray-800">
        <CardHeader>
          <CardTitle>{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>
            <div className="text-sm max-w-xs">{description}</div>
          </CardDescription>
        </CardContent>
        <CardFooter className="flex flex-row justify-between">
          <Button
            variant={"ghost"}
            className="border border-gray-800 hover:bg-orange-400 hover:text-black">
            {buttonText1}
          </Button>
          {buttonText2 && (
            <Button
              variant={"ghost"}
              className="border border-gray-800 hover:bg-orange-400 hover:text-black">
              {buttonText2}
            </Button>
          )}
        </CardFooter>
      </Card>
    </>
  );
}
