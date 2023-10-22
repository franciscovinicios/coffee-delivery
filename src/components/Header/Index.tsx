import { MapPin } from "@phosphor-icons/react";
import LogoImg from "../../assets/logo.svg";

import { Actions, Container, Content, Locale, Logo, Title } from "./styles";
import { AddCart } from "../AddCart";

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
          <AddCart color="yellow" />
        </Actions>
      </Content>
    </Container>
  );
}
