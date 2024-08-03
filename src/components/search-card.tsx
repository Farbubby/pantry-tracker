"use client";

import ItemList from "@/components/item-list";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";

export default function SearchCard() {
  const [query, setQuery] = useState("");

  return (
    <>
      <div className="flex flex-col h-96 border border-gray-800 rounded-lg p-4 gap-4 row-span-2 col-span-2">
        <div className="flex flex-col gap-1">
          <Label htmlFor="email" className="text-orange-400 text-sm">
            Want to look for an item?
          </Label>
          <Input
            name="search"
            id="search"
            type="text"
            placeholder="Search"
            className="bg-white text-black px-2 py-1 rounded-lg"
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
        <ItemList query={query} />
      </div>
    </>
  );
}
