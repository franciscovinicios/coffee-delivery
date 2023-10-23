import { Trash } from "@phosphor-icons/react";
import { ButtonsUpdateCart } from "../../../../components/ButtonsUpdateCart/inde";
import {
  Actions,
  CoffeeItemContainer,
  CoffeeItemContent,
  Details,
  Divisor,
  Image,
  Infos,
  Price,
  RemoveCoffe,
  Title,
} from "./styles";

export function CoffeItemCard() {
  return (
    <CoffeeItemContainer>
      <CoffeeItemContent>
        <Infos>
          <Image src="https://i.ibb.co/d23GwNK/expresso-tradicional.png" />
          <Details>
            <Title>Expresso Tradicional</Title>
            <Actions>
              <ButtonsUpdateCart />
              <RemoveCoffe>
                <Trash size={16} />
                <span>Remover</span>
              </RemoveCoffe>
            </Actions>
          </Details>
        </Infos>

        <Price>R$ 9,90</Price>
      </CoffeeItemContent>
      <Divisor />
    </CoffeeItemContainer>
  );
}
