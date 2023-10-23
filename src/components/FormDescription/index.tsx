import {
  DescrptionForm,
  IconContainer,
  TextContainer,
  TextTitle,
} from "./styles";
import { ReactNode } from "react";

interface FormDescription {
  icon: ReactNode;
  color: "yellow" | "purple";
  title: string;
  subtitle: string;
}
export function FormDescription({
  icon,
  color,
  title,
  subtitle,
}: FormDescription) {
  return (
    <DescrptionForm>
      <IconContainer variant={color}>{icon}</IconContainer>
      <TextContainer>
        <TextTitle className="bold">{title}</TextTitle>
        <TextTitle>{subtitle}</TextTitle>
      </TextContainer>
    </DescrptionForm>
  );
}
