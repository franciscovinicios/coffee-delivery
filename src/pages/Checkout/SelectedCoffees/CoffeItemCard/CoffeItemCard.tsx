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
import { useCart } from "../../../../hooks/useCart";
export interface CoffeItem {
  id: number;
  photo: string;
  tags: string[];
  name: string;
  description: string;
  price: number;
  amount: number;
}

interface CoffeItemCardProps {
  coffee: CoffeItem;
}
export function CoffeItemCard({ coffee }: CoffeItemCardProps) {
  const { changeCartItemQuantity, removeProductCart } = useCart();

  function handleRemoveItemCart() {
    removeProductCart(coffee.id);
  }

  function incrementtAmount() {
    changeCartItemQuantity(coffee, "increment");
  }

  function decrementAmount() {
    changeCartItemQuantity(coffee, "decrement");
  }

  return (
    <CoffeeItemContainer>
      <CoffeeItemContent>
        <Infos>
          <Image src={coffee.photo} />
          <Details>
            <Title>{coffee.name}</Title>
            <Actions>
              <ButtonsUpdateCart
                incrementAmount={incrementtAmount}
                amount={coffee.amount}
                decrementAmount={decrementAmount}
              />
              <RemoveCoffe onClick={handleRemoveItemCart}>
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
