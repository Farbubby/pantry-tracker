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
import { updateItemAction } from "@/server/items/update";
import { useFormState } from "react-dom";
import { ItemContext } from "@/context/item";
import { useContext } from "react";

export default function UpdateButton() {
  const { name, quantity } = useContext(ItemContext);
  const [state, updateItem] = useFormState(
    updateItemAction.bind(null, name),
    null
  );
  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Button
            variant={"ghost"}
            className="border border-gray-800 hover:bg-orange-400 hover:text-black">
            Update item
          </Button>
        </DialogTrigger>
        <DialogContent className="bg-gray-950 text-orange-400 border-orange-400 w-11/12">
          <DialogHeader>
            <DialogTitle>Update the quantity of your item</DialogTitle>
            <DialogDescription>
              Enter a number greater than 0.
            </DialogDescription>
          </DialogHeader>
          <div className="flex flex-col w-full items-center">
            {state?.error && (
              <div className="text-sm text-red-500">{state.error}</div>
            )}
            {state?.success && (
              <div className="text-sm text-green-500">{state.success}</div>
            )}
            <form
              action={updateItem}
              className="flex flex-col gap-4 w-full max-w-96"
              noValidate>
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
                  Update
                </Button>
              </DialogFooter>
            </form>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
