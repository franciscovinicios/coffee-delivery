import {
  Container,
  ImageIntro,
  IntroContent,
  IntroDescription,
  OurSkillContainer,
  Subtitle,
  Title,
} from "./styles";

import IntroImg from "../../../assets/intro.svg";
import { FeatureItem } from "../FeatureItem";
import { Coffee, Package, ShoppingCart, Timer } from "@phosphor-icons/react";

export function Into() {
  return (
    <Container>
      <IntroContent>
        <IntroDescription>
          <Title>
            Encontre o café perfeito <br /> para qualquer hora do dia
          </Title>

          <Subtitle>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </Subtitle>

          <OurSkillContainer>
            <FeatureItem
              color="yellow-dark"
              description="Compra simples e segura"
              icon={<ShoppingCart width={13} weight="fill" />}
            />
            <FeatureItem
              color="dark"
              description="Embalagem mantém o café intacto"
              icon={<Package width={13} weight="fill" />}
            />
            <FeatureItem
              color="yellow-ligth"
              description="Entrega rápida e rastreada"
              icon={<Timer width={13} weight="fill" />}
            />
            <FeatureItem
              color="purple"
              description="O café chega fresquinho até você"
              icon={<Coffee width={13} weight="fill" />}
            />
          </OurSkillContainer>
        </IntroDescription>

        <ImageIntro src={IntroImg} />
      </IntroContent>
    </Container>
  );
}
