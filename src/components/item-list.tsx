"use client";

import { useFilter } from "@/hooks/useFilter";
import ItemCard from "./item-card";

interface QueryProps {
  query: string;
}

export default function ItemList({ query }: QueryProps) {
  const list = useFilter(query);

  if (!list) {
    return (
      <div>
        The pantry is empty! Go back to the menu if you would like to add
        something to the pantry.
      </div>
    );
  }

  return (
    <div className="grid sm:grid-cols-2 grid-cols-1 gap-4 w-full items-center overflow-scroll">
      {list.map((item: { id: string; name: string; quantity: number }) => (
        <ItemCard key={item.id} name={item.name} quantity={item.quantity} />
      ))}
    </div>
  );
}
