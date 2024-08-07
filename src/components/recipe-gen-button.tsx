import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import Groq from "groq-sdk";
import { createClient } from "@/utils/supabase/server";

export default async function RecipeGenButton() {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return null;
  }

  const { data } = await supabase.from("pantry").select().eq("uuid", user.id);

  if (!data || (data && data.length === 0)) {
    return null;
  }

  const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

  const chatCompletion = await groq.chat.completions.create({
    messages: [
      {
        role: "user",
        content: `Generate one recipe that includes only the items in the pantry list provided. Just provide the recipe name, list and amounts of ingredients required to make it, and the instructions. Make sure it is stricly in a JSON format and remove extra text.
        Here is the pantry list: ${JSON.stringify(data)}`,
      },
    ],
    temperature: 0.5,
    model: "llama3-8b-8192",
  });

  const response = chatCompletion.choices[0]?.message?.content as string;

  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Button
            variant={"ghost"}
            className="border border-gray-800 hover:bg-orange-400 hover:text-black">
            Cook!
          </Button>
        </DialogTrigger>
        <DialogContent className="bg-gray-950 text-orange-400 border-orange-400 w-11/12">
          <DialogHeader>
            <DialogTitle>Recipes</DialogTitle>
            <DialogDescription>
              Here are some possible recipes you can make based on your pantry.
            </DialogDescription>
          </DialogHeader>
          {response || "Try to generate a recipe! :)"}
          <DialogFooter>
            <Button
              type="submit"
              variant={"ghost"}
              className="border border-gray-800 hover:bg-orange-400 hover:text-black">
              Get a recipe
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
