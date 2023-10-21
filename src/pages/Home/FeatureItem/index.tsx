import { ReactNode } from "react";
import { Colors, Container, Description, IconContent } from "./styles";

interface FeatureItemProps {
  color: Colors;
  icon: ReactNode;
  description: string;
}
export function FeatureItem({ color, description, icon }: FeatureItemProps) {
  return (
    <Container>
      <IconContent color={color}>{icon}</IconContent>
      <Description>{description}</Description>
    </Container>
  );
}
