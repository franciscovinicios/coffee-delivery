import { AdreessFormContent, FormAdressContainer, FormContent } from "./styles";
import { Input } from "../../../../components/Input";
import { FormDescription } from "../../../../components/FormDescription";
import { MapPinLine } from "@phosphor-icons/react";

export function FormAdress() {
  return (
    <FormAdressContainer>
      <FormContent>
        <FormDescription
          color="yellow"
          icon={<MapPinLine size={22} />}
          title="Endereço de Entrega"
          subtitle="Informe o endereço onde deseja receber seu pedido"
        />
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
          <Input placeholder="uf" />
        </AdreessFormContent>
      </FormContent>
    </FormAdressContainer>
  );
}
