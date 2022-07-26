import { FormAddress } from "./FormAddress/FormAddress";
import { PaymentMethods } from "./PaymentMethods";
import { CompleteOrderContainer } from "./styles";

export function CompleteOrder() {

  return (
    <CompleteOrderContainer>
      <FormAddress />
      <PaymentMethods/>
    </CompleteOrderContainer>
  )
}