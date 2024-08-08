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
import { deleteItemAction } from "@/server/items/delete";
import { ItemContext } from "@/context/item";
import { useContext } from "react";
import { useQueryClient, useMutation } from "@tanstack/react-query";

export default function RemoveButton() {
  const queryClient = useQueryClient();
  const { name, quantity } = useContext(ItemContext);

  const mutation = useMutation({
    mutationFn: () => deleteItemAction(name),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["items"] }),
  });

  const state = mutation.data;
  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Button
            variant={"ghost"}
            className="border border-gray-800 hover:bg-orange-400 hover:text-black">
            Delete item
          </Button>
        </DialogTrigger>
        <DialogContent className="bg-gray-950 text-orange-400 border-orange-400 w-11/12">
          <DialogHeader>
            <DialogTitle>Delete an item</DialogTitle>
            <DialogDescription>Do you want to delete?</DialogDescription>
          </DialogHeader>
          <div className="flex flex-col w-full items-center">
            {state?.error && (
              <div className="text-sm text-red-500">{state.error}</div>
            )}
            {state?.success && (
              <div className="text-sm text-green-500">{state.success}</div>
            )}
            <form
              onSubmit={(e) => {
                mutation.mutate();
                e.preventDefault();
              }}
              className="flex flex-col gap-4 w-full max-w-96"
              noValidate>
              <DialogFooter>
                <Button
                  type="submit"
                  variant={"ghost"}
                  className="border border-gray-800 hover:bg-orange-400 hover:text-black">
                  Delete
                </Button>
              </DialogFooter>
            </form>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
