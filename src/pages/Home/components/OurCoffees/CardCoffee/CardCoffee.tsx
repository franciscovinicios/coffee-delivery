import { ShoppingCartSimple } from "phosphor-react";
import { useState } from "react";
import { ButtonsUpdateCart } from "../../../../../components/ButtonsUpdateCart";
import { useCart } from "../../../../../hooks/UseCart";
import { formatMoney } from "../../../../../utils/formatMoney";
import {
  AddItemCartContainer, AddToCart, CoffeItem
  , ContainerTags, Description, DescriptionContainer, IconAddToCart, ImageCoffe, Price, TitleCoffe, Type
} from "./styles";

export interface CoffeItem {
  id: number;
  photo: string;
  tags: string[];
  name: string
  description: string;
  price: number
}

interface CardCoffeProps {
  coffe: CoffeItem
}


export function CardCoffee({ coffe }: CardCoffeProps) {

  const { addProduct } = useCart();
  const [quantity, setAmount] = useState(1)


  function incrementAmount() {
    const quantidade = quantity + 1
    setAmount(quantidade)
  }

  function decrementAmount() {
    const quantidade = quantity - 1
    setAmount(quantidade)
  }

  function handleAddCart() {
    const newCoffe = {
      ...coffe,
      amount: quantity
    }
    addProduct(newCoffe)
  }

  function formatMoney(value: number) {
    return value.toLocaleString("pt-BR", {
      minimumFractionDigits: 2,
    });
  }

  const formattedPrice = formatMoney(coffe.price);


  return (
    <CoffeItem>
      <ImageCoffe>
        <img src={coffe.photo} alt={coffe.name} />
      </ImageCoffe>

      <DescriptionContainer>
        <ContainerTags>
          {coffe.tags.map(tag => (
            <Type key={tag}>
              {tag}
            </Type>
          ))}
        </ContainerTags>

        <TitleCoffe>
          {coffe.name}
        </TitleCoffe>

        <Description>
          {coffe.description}
        </Description>
      </DescriptionContainer>

      <AddItemCartContainer>
        <Price>
          <span className="money">R$
            <span className="price">{formattedPrice}</span>
          </span>
        </Price>

        <AddToCart>
          <ButtonsUpdateCart
            decrementAmount={decrementAmount}
            incrementAmount={incrementAmount}
            amount={quantity}
          />

          <IconAddToCart onClick={handleAddCart}>
            <ShoppingCartSimple size={17} weight="fill" />
          </IconAddToCart>
        </AddToCart>
      </AddItemCartContainer>
    </CoffeItem>
  )
}