import { CompleteOrder } from "./CompleteOrder";
import { SelectedCoffees } from "./SelectedCoffees";
import { CheckoutContainer } from "./styles";
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from "zod";

import { FormProvider, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

enum PaymentMethods {
  credit = "credit",
  debit = "debit",
  money = "money",
}

const confirmOrderFormValidationSchema = zod.object({
  cep: zod.string().min(1, "Informe o CEP"),
  street: zod.string().min(1, "Informe o Rua"),
  number: zod.string().min(1, "Informe o Número"),
  complement: zod.string(),
  district: zod.string().min(1, "Informe o Bairro"),
  city: zod.string().min(1, "Informe a Cidade"),
  uf: zod.string().min(1, "Informe a UF"),
  paymentMethod: zod.nativeEnum(PaymentMethods, {
    errorMap: () => {
      return { message: "Informe o método de pagamento" };
    },
  }),
});

export type OrderData = zod.infer<typeof confirmOrderFormValidationSchema>;
type ConfirmOrderFormData = OrderData;

export function Checkout() {
  const confirmOrderForm = useForm<ConfirmOrderFormData>({
    resolver: zodResolver(confirmOrderFormValidationSchema),
    defaultValues: {
      paymentMethod: undefined,
    },
  });

  const { handleSubmit } = confirmOrderForm;

  const navigate = useNavigate();

  function handleConfirmOrder(data: ConfirmOrderFormData) {
    navigate("/success", {
      state: data,
    });
  }

  return (
    <FormProvider {...confirmOrderForm}>
      <CheckoutContainer onSubmit={handleSubmit(handleConfirmOrder)}>
        <CompleteOrder />
        <SelectedCoffees />
      </CheckoutContainer>
    </FormProvider>
  );
}
