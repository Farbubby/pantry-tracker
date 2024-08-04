import { createClient } from "@/utils/supabase/server";

export default async function StatsCard() {
  const supabase = createClient();
  let listSize = 0;
  let quantity = 0;

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return null;
  }

  const { data, error } = await supabase
    .from("pantry")
    .select()
    .eq("uuid", user.id);

  if (error) {
    return null;
  }

  if (!data || (data && data.length === 0)) {
    return null;
  }

  listSize = data.length;

  data.forEach((item: { quantity: number }) => {
    quantity += item.quantity;
  });

  return (
    <div className="p-4 rounded-lg shadow-md w-full text-orange-400 bg-gray-950 border border-gray-800">
      <h2 className="text-2xl font-bold">Pantry stats</h2>
      <div className="flex flex-col gap-4 mt-4">
        <div className="flex flex-row justify-between">
          <div>Total items</div>
          <div className="text-muted-foreground">x{listSize}</div>
        </div>
        <div className="flex flex-row justify-between">
          <div>Total quantity</div>
          <div className="text-muted-foreground">x{quantity}</div>
        </div>
      </div>
    </div>
  );
}
