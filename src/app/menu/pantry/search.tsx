"use client";

import ItemList from "@/components/item-list";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";

export default function Search() {
  const [query, setQuery] = useState("");

  return (
    <>
      <div className="flex flex-col gap-1 mt-20">
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
    </>
  );
}
