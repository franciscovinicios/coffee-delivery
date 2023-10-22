import { ourCoffee } from "../../../data/ourCoffee";
import { CardCoffe } from "../CardCoffee";
import { Container, OurCoffeesContent, Title } from "./styles";

export function OurCoffe() {
  return (
    <Container>
      <Title>Nossos cafés</Title>

      <OurCoffeesContent>
        {ourCoffee.map((coffee) => (
          <CardCoffe coffee={coffee} />
        ))}
      </OurCoffeesContent>
    </Container>
  );
}
