import { Bank, CreditCard, CurrencyDollar, Money } from "phosphor-react";
import { ContainerIcon, DescriptionForm, TextContainer, TextTitle, PaymentMethodsContainer, PaymentTypes } from "./styles";
import { TypeMethodInput } from "./TypeMethodInput/TypeMethodInput";


export const paymentMethods = {
  credit: {
    label: "Cartão de crédito",
    icon: <CreditCard size={16} />,
  },
  debit: {
    label: "Cartão de débito",
    icon: <Bank size={16} />,
  },
  money: {
    label: "Dinheiro",
    icon: <Money size={16} />,
  },
};


export function PaymentMethods() {
  

  return (
    <PaymentMethodsContainer>
      <DescriptionForm>
        <ContainerIcon>
          <CurrencyDollar size={19} />
        </ContainerIcon>

        <TextContainer>
          <TextTitle className="bold">
            Pagamento
          </TextTitle>

          <TextTitle>
            O pagamento é feito na entrega. Escolha a forma que deseja pagar
          </TextTitle>
        </TextContainer>
      </DescriptionForm>

      <PaymentTypes>
      {Object.entries(paymentMethods).map(([key, { label, icon }]) => (
        <TypeMethodInput
          key={label}
          id={key}
          icon={icon}
          label={label}
          value={key}
        />
      ))}

      </PaymentTypes>
    </PaymentMethodsContainer>

  )
}