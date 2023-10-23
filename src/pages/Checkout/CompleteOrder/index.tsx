import { FormAdress } from "./FormAdress/FormAdress";
import { PaymentMethods } from "./PaymentMethods/PaymentMethods";
import { CompleteOrderContainer, TitleSection } from "./styles";

export function CompleteOrder() {
  return (
    <CompleteOrderContainer>
      <TitleSection>Complete seu pedido</TitleSection>
      <FormAdress />
      <PaymentMethods />
    </CompleteOrderContainer>
  );
}
