import {
  CartTotalPriceContainer,
  ServiceResumeItem,
  TextService,
} from "./styles";

export function CardTotalPrice() {
  return (
    <CartTotalPriceContainer>
      <ServiceResumeItem>
        <TextService>Total de itens</TextService>

        <TextService className="price">R$ 29,70</TextService>
      </ServiceResumeItem>
      <ServiceResumeItem>
        <TextService>Entrega</TextService>

        <TextService className="price">R$ 3,50 </TextService>
      </ServiceResumeItem>
      <ServiceResumeItem>
        <TextService className="bold">Total</TextService>

        <TextService className="bold">R$ 33,20 </TextService>
      </ServiceResumeItem>
    </CartTotalPriceContainer>
  );
}
