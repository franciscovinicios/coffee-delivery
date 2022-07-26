import { forwardRef, InputHTMLAttributes, ReactNode } from "react";
import { TypeMethodContainer, TypeMethodInputContainer } from "./styles";

type PaymentMethodInputProps = InputHTMLAttributes<HTMLInputElement> & {
  icon: ReactNode;
  label: string;
};



export const TypeMethodInput = forwardRef<
  HTMLInputElement,
  PaymentMethodInputProps
> (({ id, icon, label, ...props }, ref) => {
  return (
    <TypeMethodInputContainer>
      <input id={id} type="radio" {...props} name="paymentMethod" ref={ref}  />
      <label htmlFor={id}>
        <TypeMethodContainer>
          {icon}
          {label}
        </TypeMethodContainer>
      </label>
    </TypeMethodInputContainer>
  )
})