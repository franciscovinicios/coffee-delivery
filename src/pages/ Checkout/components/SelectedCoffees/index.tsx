import { formatMoney } from "../../../../utils/formatMoney";
import { ItemCart } from "./ItemCart/ItemCart";
import { ButtonSubmit, CartTotalPrice, ResumeCart, SelectedCoffeesContainer, ServicesResume, TextService, TextTitleSection } from "./styles";



export function SelectedCoffees() {
  return (
    <SelectedCoffeesContainer>
      <TextTitleSection>
        Cafés selecionados
      </TextTitleSection>

      <ResumeCart>

        <ItemCart />
        <ItemCart />


        <CartTotalPrice>
          <ServicesResume>
            <TextService>
              Total de itens
            </TextService>

            <TextService>
              R$ 22
            </TextService>
          </ServicesResume>

          <ServicesResume>
            <TextService>
              Entrega
            </TextService>

            <TextService>
              R$ 22
            </TextService>
          </ServicesResume>

          <ServicesResume>
            <TextService className="text-bold">
              Total
            </TextService>

            <TextService className="text-bold">
              R$ 22
            </TextService>
          </ServicesResume>
        </CartTotalPrice>

        <ButtonSubmit type="submit" >
          confirmar pedido
        </ButtonSubmit>
      </ResumeCart>

    </SelectedCoffeesContainer>
  )
}