import { createContext } from "react";

export const ItemContext = createContext(
  {} as { name: string; quantity: number }
);
