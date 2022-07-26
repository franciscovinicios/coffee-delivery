

import { Trash } from "phosphor-react";
import { ButtonsUpdateCart } from "../../../../../components/ButtonsUpdateCart";
import { Border, ButtonsContainer, DescriptionItem, ItemCartContainer, ItemCartContent, PriceItem, RemoveProductButton, TextItem } from "./styles";



export function ItemCart() {

  return (
    <ItemCartContainer>
      <ItemCartContent>
        <img src="https://i.ibb.co/L6Tj2yF/arabe.png" alt="" />
        <DescriptionItem>
          <div className="text">
            <TextItem>
              Árabe
            </TextItem>
            <PriceItem>
              R$ 9,90
            </PriceItem>
          </div>

          <ButtonsContainer>
            <ButtonsUpdateCart
            />
            <RemoveProductButton type="button">
              <Trash size={14} weight="regular" />
              <span>Remover</span>
            </RemoveProductButton>
          </ButtonsContainer>
        </DescriptionItem>
      </ItemCartContent>
      <Border></Border>

    </ItemCartContainer>
  )
}