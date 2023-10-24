import { useContext } from "react";
import { CartContext } from "../context/CardContext";

export function useCart() {
  const context = useContext(CartContext);

  return context;
}
