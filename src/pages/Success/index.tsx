

import { CurrencyDollar, MapPin, Timer } from "phosphor-react";
import { ContainerText, IconContainer, InfoItem, OrderDetails, OrderInfo, SuccessContainer } from "./styles";

import MotoboyImg from '../../assets/motoboy.svg'
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { OrderData } from "../ Checkout";
import { paymentMethods } from "../ Checkout/components/CompleteOrder/PaymentMethods";



interface LocationType {
  state: OrderData;
}


export function Success() {

  const navigate = useNavigate()
  const { state } = useLocation() as unknown as LocationType;
  useEffect(() => {
    if (!state) {
      navigate("/");
    }
  }, []);

  if (!state) return <></>;

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
            <span>Entrega em <span className="bold">{state.street}, {state.number}</span> <br />
              {state.district}- {state.city},{state.uf}
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
            <span className="bold">{paymentMethods[state.paymentMethod].label}</span>
            </span>
          </InfoItem>
        </OrderInfo>


        <img src={MotoboyImg} alt="" />
      </OrderDetails>
    </SuccessContainer>
  )
}