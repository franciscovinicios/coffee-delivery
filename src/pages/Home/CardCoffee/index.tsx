import { useState } from "react";
import { AddCart } from "../../../components/AddCart";
import { ButtonsUpdateCart } from "../../../components/ButtonsUpdateCart/inde";
import { useCart } from "../../../hooks/useCart";
import {
  BuyContainer,
  Container,
  Content,
  Image,
  Money,
  PriceContainer,
  PriceContent,
  Subtitle,
  TagItem,
  TagsContent,
  ActionsContainer,
  Title,
} from "./styles";

export interface CoffeItem {
  id: number;
  photo: string;
  tags: string[];
  name: string;
  description: string;
  price: number;
}

interface CardCoffeeProps {
  coffee: CoffeItem;
}

export function CardCoffe({ coffee }: CardCoffeeProps) {
  const { addProduct } = useCart();
  const [quantity, setAmount] = useState(1);

  function incrementAmount() {
    const quantidade = quantity + 1;
    setAmount(quantidade);
  }

  function decrementAmount() {
    const quantidade = quantity - 1;
    setAmount(quantidade);
  }

  function handleAddCart() {
    const newCoffe = {
      ...coffee,
      amount: quantity,
    };
    addProduct(newCoffe);
  }

  function formatMoney(value: number) {
    return value.toLocaleString("pt-BR", {
      minimumFractionDigits: 2,
    });
  }

  const formattedPrice = formatMoney(coffee.price);

  return (
    <Container>
      <Content>
        <Image src={coffee.photo} />
        <TagsContent>
          {coffee.tags.map((item) => (
            <TagItem key={item}>{item}</TagItem>
          ))}
        </TagsContent>

        <Title>{coffee.name}l</Title>
        <Subtitle>{coffee.description}</Subtitle>

        <BuyContainer>
          <PriceContainer>
            <Money>R$</Money>
            <PriceContent>{formattedPrice}</PriceContent>
          </PriceContainer>

          <ActionsContainer>
            <ButtonsUpdateCart
              decrementAmount={decrementAmount}
              incrementAmount={incrementAmount}
              amount={quantity}
            />
            <AddCart color="purple" onClick={handleAddCart} />
          </ActionsContainer>
        </BuyContainer>
      </Content>
    </Container>
  );
}
