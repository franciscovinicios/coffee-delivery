

import { CurrencyDollar, MapPin, Timer } from "phosphor-react";
import { ContainerText, IconContainer, InfoItem, OrderDetails, OrderInfo, SuccessContainer } from "./styles";

import MotoboyImg from '../../assets/motoboy.svg'


export function Success() {

  return (
    <SuccessContainer>
      <ContainerText>
        <span className="bold">
          Uhu! Pedido confirmado
        </span>
        <span className="light">
          Agora é só aguardar que logo o café chegará até você
        </span>
      </ContainerText>

      <OrderDetails>
        <OrderInfo>
          <InfoItem>
            <IconContainer className="map-pin" >
              <MapPin size={14} weight="fill" />
            </IconContainer>
            <span>Entrega em <span className="bold">Rua João Daniel Martinelli, 102</span> <br />
              Farrapos - Porto Alegre,  RS,
            </span>
          </InfoItem>

          <InfoItem>
            <IconContainer className="timer">
              <Timer size={14} weight="fill" />
            </IconContainer>
            <span>Previsão de entrega<br />
              <span className="bold">20 min - 30 min</span>
            </span>
          </InfoItem>

          <InfoItem>
            <IconContainer className="money">
              <CurrencyDollar size={14} weight="fill" />
            </IconContainer>
            <span>Pagamento na entrega<br />
              <span className="bold">Cartão de Crédito</span>
            </span>
          </InfoItem>
        </OrderInfo>


        <img src={MotoboyImg} alt="" />
      </OrderDetails>
    </SuccessContainer>
  )
}