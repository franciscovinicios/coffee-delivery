import { useCart } from "../../../../hooks/useCart";
import { formatMoney } from "../../../../utils/formatMoney";
import {
  CartTotalPriceContainer,
  ServiceResumeItem,
  TextService,
} from "./styles";

const DELIVERY_PRICE = 3.5;

export function CardTotalPrice() {
  const { cartItemsTotal } = useCart();

  const cartTotal = DELIVERY_PRICE + cartItemsTotal;

  const formattedItemsTotal = formatMoney(cartItemsTotal);
  const formattedCartTotal = formatMoney(cartTotal);
  const formattedDeliveryPrice = formatMoney(DELIVERY_PRICE);
  return (
    <CartTotalPriceContainer>
      <ServiceResumeItem>
        <TextService>Total de itens</TextService>

        <TextService className="price">{formattedItemsTotal}</TextService>
      </ServiceResumeItem>
      <ServiceResumeItem>
        <TextService>Entrega</TextService>

        <TextService className="price">{formattedDeliveryPrice}</TextService>
      </ServiceResumeItem>
      <ServiceResumeItem>
        <TextService className="bold">Total</TextService>

        <TextService className="bold">{formattedCartTotal}</TextService>
      </ServiceResumeItem>
    </CartTotalPriceContainer>
  );
}
