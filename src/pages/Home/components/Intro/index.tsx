import { CoffeeImg, IntroContainer, Specialties, Subtitle, Title } from "./styles";

import IntroCoffeeImg from '../../../../assets/introduction.svg'
import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";
import { SpecialtyItem } from "./SpecialtyItem/SpecialtyItem";

export function Intro() {
  return (
    <IntroContainer>
      <div className="content">
        <section>
          <Title>
            Encontre o café perfeito <br />
            para qualquer hora do dia
          </Title>

          <Subtitle>
            Com o Coffee Delivery você recebe seu café onde estiver, a<br /> qualquer hora
          </Subtitle>

          <Specialties>
            <SpecialtyItem
              color="yellow-dark"
              description="Compra simples e segura"
              icon={<ShoppingCart width={13} weight="fill" />}
            />
            <SpecialtyItem
              color="dark"
              description="Embalagem mantém o café intacto"
              icon={<Package size={13} weight="fill" />}
            />

            <SpecialtyItem
              color="yellow-light"

              description="Entrega rápida e rastreada"
              icon={<Timer size={13} weight="fill" />}
            />

            <SpecialtyItem
              color="purple"
              description="O café chega fresquinho até você"
              icon={<Coffee size={13} weight="fill" />}
            />
          </Specialties>
        </section>

        <CoffeeImg>
          <img src={IntroCoffeeImg} alt="" />
        </CoffeeImg>
      </div>
    </IntroContainer>
  )
}