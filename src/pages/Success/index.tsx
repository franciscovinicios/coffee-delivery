import { CurrencyDollar, MapPin, Timer } from "@phosphor-icons/react";
import {
  Description,
  DetailItem,
  IconContainer,
  Image,
  OrderContent,
  OrderDetails,
  Subtitle,
  SucessContainer,
  TextSucessDelivery,
  Title,
} from "./styles";

import DeliveryImg from "../../assets/Illustration.svg";

export function Sucess() {
  return (
    <SucessContainer>
      <TextSucessDelivery>
        <Title>Uhu! Pedido confirmado</Title>

        <Subtitle>
          Agora é só aguardar que logo o café chegará até você
        </Subtitle>
      </TextSucessDelivery>

      <OrderDetails>
        <OrderContent>
          <DetailItem>
            <IconContainer color="purple">
              <MapPin size={14} weight="fill" />
            </IconContainer>
            <Description>
              Entrega em <span>Rua João Daniel Martinelli, 102</span> <br />
              Farrapos - Porto Alegre, RS
            </Description>
          </DetailItem>
          <DetailItem>
            <IconContainer color="yellow-light">
              <Timer size={14} weight="fill" />
            </IconContainer>
            <Description>
              Previsão de entrega <br />
              <span>20 min - 30 min</span>
            </Description>
          </DetailItem>
          <DetailItem>
            <IconContainer color="yellow-dark">
              <CurrencyDollar size={14} />
            </IconContainer>
            <Description>
              Pagamento na entrega <br />
              <span>Cartão de Crédito</span>
            </Description>
          </DetailItem>
        </OrderContent>
        <Image src={DeliveryImg} />
      </OrderDetails>
    </SucessContainer>
  );
}
