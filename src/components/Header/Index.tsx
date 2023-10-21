import { MapPin, ShoppingCart } from "@phosphor-icons/react";
import LogoImg from "../../assets/logo.svg";

import {
  Actions,
  Cart,
  Container,
  Content,
  Locale,
  Logo,
  Title,
} from "./styles";

export function Header() {
  return (
    <Container>
      <Content>
        <Logo src={LogoImg} />

        <Actions>
          <Locale>
            <MapPin size={20} weight="fill" />
            <Title>Porto Alegre, RS</Title>
          </Locale>

          <Cart>
            <ShoppingCart size={20} weight="fill" />
          </Cart>
        </Actions>
      </Content>
    </Container>
  );
}
