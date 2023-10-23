import { AdreessFormContent, FormAdressContainer, FormContent } from "./styles";
import { Input } from "../../../../components/Input";
import { FormDescription } from "../../../../components/FormDescription";
import { MapPinLine } from "@phosphor-icons/react";
import { useFormContext } from "react-hook-form";
export function FormAdress() {
  const { register } = useFormContext();
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
          <Input
            placeholder="CEP"
            className="cep"
            type="number"
            {...register("cep")}
          />
          <Input placeholder="Rua" className="street" {...register("street")} />
          <Input placeholder="Numero" {...register("number")} />
          <Input
            placeholder="complemento"
            {...register("complement")}
            className="complement"
            rightText="Opcional"
          />
          <Input placeholder="Bairro" {...register("district")} />
          <Input placeholder="Cidade" {...register("city")} />
          <Input placeholder="uf" {...register("uf")} />
        </AdreessFormContent>
      </FormContent>
    </FormAdressContainer>
  );
}
