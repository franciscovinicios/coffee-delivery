import { Minus, Plus } from "@phosphor-icons/react";
import { AmountText, Container, IconContent } from "./styles";

export function ButtonsUpdateCart() {
  return (
    <Container>
      <IconContent>
        <Minus size={14} />
      </IconContent>
      <AmountText>1</AmountText>

      <IconContent>
        <Plus size={14} />
      </IconContent>
    </Container>
  );
}
