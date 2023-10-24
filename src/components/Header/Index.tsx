import { MapPin } from "@phosphor-icons/react";
import LogoImg from "../../assets/logo.svg";

import {
  Actions,
  ButtonContainer,
  Container,
  Content,
  Locale,
  Logo,
  Title,
} from "./styles";
import { AddCart } from "../AddCart";
import { NavLink } from "react-router-dom";
import { useCart } from "../../hooks/useCart";

export function Header() {
  const { cart } = useCart();
  return (
    <Container>
      <Content>
        <NavLink to={"/"}>
          <Logo src={LogoImg} />
        </NavLink>

        <Actions>
          <Locale>
            <MapPin size={20} weight="fill" />
            <Title>Porto Alegre, RS</Title>
          </Locale>
          <NavLink to={"/checkout"}>
            <ButtonContainer>
              <AddCart color="yellow" />
              {cart.length > 0 && <span>{cart.length}</span>}
            </ButtonContainer>
          </NavLink>
        </Actions>
      </Content>
    </Container>
  );
}
