import { ShoppingCart } from "@phosphor-icons/react";
import { Container } from "./styles";
interface AddcartProps {
  color: "yellow" | "purple";
}
export function AddCart({ color }: AddcartProps) {
  return (
    <Container variant={color}>
      <ShoppingCart size={20} weight="fill" />
    </Container>
  );
}
