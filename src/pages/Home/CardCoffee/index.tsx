import { AddCart } from "../../../components/AddCart";
import { ButtonsUpdateCart } from "../../../components/ButtonsUpdateCart/inde";
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
            <TagItem>{item}</TagItem>
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
            <ButtonsUpdateCart />
            <AddCart color="purple" />
          </ActionsContainer>
        </BuyContainer>
      </Content>
    </Container>
  );
}
