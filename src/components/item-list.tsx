"use client";

import { useFilter } from "@/hooks/useFilter";
import ItemCard from "./item-card";
import { useQuery } from "@tanstack/react-query";
import { createClient } from "@/utils/supabase/client";

interface QueryProps {
  filter: string;
}

const getItems = async (filter: string) => {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return null;
  }

  const { data, error } = await supabase
    .from("pantry")
    .select()
    .eq("uuid", user.id)
    .ilike("name", `%${filter}%`)
    .order("created_at", { ascending: false });

  if (error) {
    return null;
  }

  if (!data || (data && data.length === 0)) {
    return null;
  }

  return data;
};

export default function ItemList({ filter }: QueryProps) {
  const query = useQuery({
    queryKey: ["items", filter],
    queryFn: ({ queryKey }) => getItems(queryKey[1]),
  });

  if (query.isLoading) {
    return <div>Loading...</div>;
  }

  if (query.isError) {
    return <div>Error...</div>;
  }

  if (!query.data) {
    return (
      <div>
        The pantry is empty! Go back to the menu if you would like to add
        something to the pantry.
      </div>
    );
  }

  return (
    <div className="grid sm:grid-cols-2 grid-cols-1 gap-4 w-full items-center overflow-scroll border border-gray-700 rounded-lg p-4 h-96">
      {query.data.map(
        (item: { id: string; name: string; quantity: number }) => (
          <ItemCard key={item.id} name={item.name} quantity={item.quantity} />
        )
      )}
    </div>
  );
}
