"use client";

import ItemList from "@/components/item-list";
import { useState } from "react";

export default function Search() {
  const [query, setQuery] = useState("");

  return (
    <>
      <ItemList query="" />
    </>
  );
}
