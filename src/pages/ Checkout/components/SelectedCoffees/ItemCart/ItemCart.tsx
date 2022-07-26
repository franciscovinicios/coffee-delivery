

import { Trash } from "phosphor-react";
import { ButtonsUpdateCart } from "../../../../../components/ButtonsUpdateCart";
import { CartItem } from "../../../../../context/CardContext";
import { useCart } from "../../../../../hooks/UseCart";
import { Border, ButtonsContainer, DescriptionItem, ItemCartContainer, ItemCartContent, PriceItem, RemoveProductButton, TextItem } from "./styles";

interface CoffeeCartCardProps {
  coffee: CartItem;
}

export function ItemCart({ coffee }: CoffeeCartCardProps) {

  const { removeProductCart, changeCartItemQuantity,  } = useCart();


  function handleRemoveItemCart() {
    removeProductCart(coffee.id)
  }

  function incrementtAmount() {
    changeCartItemQuantity(coffee, "increment")
  }

  function decrementAmount() {
    changeCartItemQuantity(coffee, "decrement")
  }

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
              incrementAmount={incrementtAmount}
              decrementAmount={decrementAmount}
              amount={coffee.amount}
            />
            <RemoveProductButton type="button" onClick={handleRemoveItemCart}>
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