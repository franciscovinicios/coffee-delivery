import { ShoppingCart } from "@phosphor-icons/react";
import { Container } from "./styles";
interface AddcartProps extends React.HTMLAttributes<HTMLButtonElement> {
  color: "yellow" | "purple";
}
export function AddCart({ color, ...rest }: AddcartProps) {
  return (
    <Container {...rest} variant={color}>
      <ShoppingCart size={20} weight="fill" />
    </Container>
  );
}
