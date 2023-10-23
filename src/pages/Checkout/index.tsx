import { CompleteOrder } from "./CompleteOrder";
import { SelectedCoffees } from "./SelectedCoffees";
import { CheckoutContainer } from "./styles";

export function Checkout() {
  return (
    <CheckoutContainer>
      <CompleteOrder />
      <SelectedCoffees />
    </CheckoutContainer>
  );
}
