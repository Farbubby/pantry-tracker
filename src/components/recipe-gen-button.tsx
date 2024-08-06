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
        content:
          'Generate a list of recipes that can be made using only the items in the pantry list provided. For each recipe, provide the required ingredients with their quantities and any missing ingredients with their quantities. Format the result as a JSON object with "recipe" as the recipe name, "required" as an array of required ingredients, and "missing" as an array of missing ingredients. Just provide the JSON format, forget and remove the extraneous text. Here is the pantry list: ' +
          JSON.stringify(data),
      },
    ],
    model: "llama3-8b-8192",
  });

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
          {chatCompletion.choices[0]?.message?.content ||
            "Sorry, I can't find anything to make :("}
        </DialogContent>
      </Dialog>
    </>
  );
}
