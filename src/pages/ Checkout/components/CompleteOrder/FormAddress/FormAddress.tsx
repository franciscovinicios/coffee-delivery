import { MapPinLine } from "phosphor-react";
import { ContainerGroup, ContainerIcon, DescriptionForm, FormAddressContainer, FormContent, FormInputsAddress, InputNumber, InputText, TextContainer, TextTitle, TextTitleSection } from "./styles";



export function FormAddress() {
  return (
    <FormAddressContainer>
      <TextTitleSection>
        Complete seu pedido
      </TextTitleSection>

      <FormContent>
        <DescriptionForm>
          <ContainerIcon>
            <MapPinLine size={19} />
          </ContainerIcon>

          <TextContainer>
            <TextTitle className="bold">
              Endereço de Entrega
            </TextTitle>

            <TextTitle>
              Informe o endereço onde deseja receber seu pedido
            </TextTitle>
          </TextContainer>
        </DescriptionForm>

        <FormInputsAddress>
          <InputNumber type="number" placeholder="CEP" />
          <InputText placeholder="Rua" className="street" />

          <ContainerGroup>
            <InputText type="number" placeholder="Número" />
            <InputText placeholder="Complemento" className="complement" />
          </ContainerGroup>

          <ContainerGroup>
            <InputText placeholder="Bairro" />
            <InputText placeholder="Cidade" className="city" />
            <InputText placeholder="UF" className="uf" />
          </ContainerGroup>
        </FormInputsAddress>
      </FormContent>
    </FormAddressContainer>
  )
}