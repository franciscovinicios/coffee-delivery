import { Minus, Plus } from "@phosphor-icons/react";
import { AmountText, Container, IconContent } from "./styles";

interface ButtonsUpdateCartProps {
  decrementAmount?: () => void;
  incrementAmount?: () => void;
  amount: number;
}

export function ButtonsUpdateCart({
  incrementAmount,
  decrementAmount,
  amount,
}: ButtonsUpdateCartProps) {
  return (
    <Container>
      <IconContent
        type="button"
        onClick={decrementAmount}
        disabled={amount <= 1}
      >
        <Minus size={14} />
      </IconContent>
      <AmountText>{amount}</AmountText>

      <IconContent type="button" onClick={incrementAmount}>
        <Plus size={14} />
      </IconContent>
    </Container>
  );
}
