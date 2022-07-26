import { useCart } from "../../../../hooks/UseCart";
import { formatMoney } from "../../../../utils/formatMoney";
import { ItemCart } from "./ItemCart/ItemCart";
import { ButtonSubmit, CartTotalPrice, ResumeCart, SelectedCoffeesContainer, ServicesResume, TextService, TextTitleSection } from "./styles";


const DELIVERY_PRICE = 3.5;

export function SelectedCoffees() {
  const { cart, cartItemsTotal } = useCart();

  const cartTotal = DELIVERY_PRICE + cartItemsTotal;

  const formattedItemsTotal = formatMoney(cartItemsTotal);
  const formattedCartTotal = formatMoney(cartTotal);
  const formattedDeliveryPrice = formatMoney(DELIVERY_PRICE);

  return (
    <SelectedCoffeesContainer>
      <TextTitleSection>
        Cafés selecionados
      </TextTitleSection>
      <ResumeCart>
        {cart.map(coffe => (
          <ItemCart
            key={coffe.id}
            coffee={coffe}
          />
        ))}


        <CartTotalPrice>
          <ServicesResume>
            <TextService>
              Total de itens
            </TextService>

            <TextService>
              R$ {formattedItemsTotal}
            </TextService>
          </ServicesResume>

          <ServicesResume>
            <TextService>
              Entrega
            </TextService>

            <TextService>
              R$ {formattedDeliveryPrice}
            </TextService>
          </ServicesResume>

          <ServicesResume>
            <TextService className="text-bold">
              Total
            </TextService>

            <TextService className="text-bold">
              R$ {formattedCartTotal}
            </TextService>
          </ServicesResume>
        </CartTotalPrice>

        <ButtonSubmit type="submit" disabled={cart.length <= 0}>
          confirmar pedido
        </ButtonSubmit>
      </ResumeCart>

    </SelectedCoffeesContainer>
  )
}