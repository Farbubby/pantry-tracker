"use client";

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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { addItemAction } from "@/server/items/add";
import { useFormState } from "react-dom";

export default function AddButton() {
  const [state, addItem] = useFormState(addItemAction, null);
  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Button
            variant={"ghost"}
            className="border border-gray-800 hover:bg-orange-400 hover:text-black">
            Add item
          </Button>
        </DialogTrigger>
        <DialogContent className="bg-gray-950 text-orange-400 border-orange-400 w-11/12">
          <DialogHeader>
            <DialogTitle>Add your item</DialogTitle>
            <DialogDescription>
              Type a name of an item you want added. Click Add when done.
            </DialogDescription>
          </DialogHeader>
          <div className="flex flex-col w-full items-center">
            <form
              action={addItem}
              className="flex flex-col gap-4 w-full max-w-96"
              noValidate>
              <div className="flex flex-col gap-1">
                <Label htmlFor="email" className="text-orange-500 text-sm">
                  Name
                </Label>
                <Input
                  name="name"
                  id="name"
                  type="text"
                  placeholder="Name"
                  className="bg-white text-black px-2 py-1 rounded-lg"
                />
                {state?.fieldError?.name && (
                  <div className="text-sm text-red-500">
                    {state.fieldError.name}
                  </div>
                )}
              </div>
              <div className="flex flex-col gap-1">
                <Label htmlFor="email" className="text-orange-500 text-sm">
                  Quantity
                </Label>
                <Input
                  name="quantity"
                  id="quantity"
                  type="number"
                  placeholder="Quantity"
                  className="bg-white text-black px-2 py-1 rounded-lg"
                />
                {state?.fieldError?.quantity && (
                  <div className="text-sm text-red-500">
                    {state.fieldError.quantity}
                  </div>
                )}
              </div>
              <DialogFooter>
                <Button
                  type="submit"
                  variant={"ghost"}
                  className="border border-gray-800 hover:bg-orange-400 hover:text-black">
                  Add
                </Button>
              </DialogFooter>
            </form>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
