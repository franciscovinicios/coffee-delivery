import { ReactNode } from "react";
import { ContainerCircle, SpecialtieItem } from "./styles";


export interface SpecialtyItemProps {
  color: 'yellow-dark' | 'yellow-light' | 'dark' | 'purple'
  icon: ReactNode
  description: string
  
}

export function SpecialtyItem({ icon, description, color}: SpecialtyItemProps) {
  return (
      <SpecialtieItem>
        <ContainerCircle color={color}>  
          {icon}
        </ContainerCircle>
        <span>{description}</span>
      </SpecialtieItem>
  )
}

