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
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { OrderData } from "../Checkout";
import { paymentMethods } from "../Checkout/CompleteOrder/PaymentMethods/PaymentMethods";

interface LocationType {
  state: OrderData;
}

export function Sucess() {
  const navigate = useNavigate();
  const { state } = useLocation() as unknown as LocationType;
  useEffect(() => {
    if (!state) {
      navigate("/");
    }
  }, [navigate, state]);

  if (!state) return <></>;
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
              Entrega em{" "}
              <span>
                {state.street},{state.number}
              </span>{" "}
              <br />
              {state.district}- {state.city},{state.uf}
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
              <span>{paymentMethods[state.paymentMethod].label}</span>
            </Description>
          </DetailItem>
        </OrderContent>
        <Image src={DeliveryImg} />
      </OrderDetails>
    </SucessContainer>
  );
}
