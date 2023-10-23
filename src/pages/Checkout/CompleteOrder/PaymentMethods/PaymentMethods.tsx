import { Bank, CreditCard, CurrencyDollar, Money } from "@phosphor-icons/react";
import { FormDescription } from "../../../../components/FormDescription";
import { PaymentMethodsContainer, PaymentTypes } from "./styles";
import { TypePayment } from "./TypePayment/TypePayment";

export function PaymentMethods() {
  const paymentMethods = {
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
  return (
    <PaymentMethodsContainer>
      <FormDescription
        color="purple"
        icon={<CurrencyDollar size={22} />}
        title="Pagamento"
        subtitle="O pagamento é feito na entrega. Escolha a forma que deseja pagar"
      />
      <PaymentTypes>
        {Object.entries(paymentMethods).map(([key, { label, icon }]) => (
          <TypePayment
            key={label}
            id={key}
            icon={icon}
            label={label}
            value={key}
          />
        ))}
      </PaymentTypes>
    </PaymentMethodsContainer>
  );
}
