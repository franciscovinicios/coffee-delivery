import { MapPinLine } from "@phosphor-icons/react";
import {
  AdreessFormContent,
  CheckoutContainer,
  CompleteOrderContainer,
  DescrptionForm,
  FormAdressContainer,
  FormContent,
  IconContainer,
  TextContainer,
  TextTitle,
  TitleSection,
} from "./styles";
import { Input } from "../../components/Input";

export function Checkout() {
  return (
    <CheckoutContainer>
      <CompleteOrderContainer>
        <TitleSection>Complete seu pedido</TitleSection>
        <FormAdressContainer>
          <FormContent>
            <DescrptionForm>
              <IconContainer>
                <MapPinLine size={19} />
              </IconContainer>
              <TextContainer>
                <TextTitle className="bold">Endereço de Entrega</TextTitle>
                <TextTitle>
                  Informe o endereço onde deseja receber seu pedido
                </TextTitle>
              </TextContainer>
            </DescrptionForm>
            <AdreessFormContent>
              <Input placeholder="CEP" className="cep" />
              <Input placeholder="Rua" className="street" />
              <Input placeholder="Numero" />
              <Input
                placeholder="complemento"
                className="complement"
                rightText="Opcional"
              />
              <Input placeholder="Bairro" />
              <Input placeholder="Cidade" />
            </AdreessFormContent>
          </FormContent>
        </FormAdressContainer>
      </CompleteOrderContainer>
    </CheckoutContainer>
  );
}
