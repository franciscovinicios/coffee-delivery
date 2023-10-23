import { forwardRef, InputHTMLAttributes } from "react";

import { InputWrapper, InputStyled, RightText } from "./styles";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  rightText?: string;
};

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, rightText, ...props }, ref) => {
    return (
      <InputWrapper className={className}>
        <InputStyled ref={ref} {...props} />
        {rightText && <RightText>{rightText}</RightText>}
      </InputWrapper>
    );
  }
);
