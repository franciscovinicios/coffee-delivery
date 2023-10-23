import { FormAdress } from "./FormAdress/FormAdress";
import { TitleSection } from "./FormAdress/styles";
import { PaymentMethods } from "./PaymentMethods/PaymentMethods";
import { CompleteOrderContainer } from "./styles";

export function CompleteOrder() {
  return (
    <CompleteOrderContainer>
      <TitleSection>Complete seu pedido</TitleSection>
      <FormAdress />
      <PaymentMethods />
    </CompleteOrderContainer>
  );
}
