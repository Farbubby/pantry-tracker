"use client";

import { createClient } from "@/utils/supabase/client";
import { useEffect, useState } from "react";

export const useFilter = (filter: string) => {
  const [list, setList] = useState<any[] | null>(null);

  useEffect(() => {
    const fetchList = async () => {
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

      setList(data);
    };
    fetchList();
  }, [filter]);

  return list;
};
