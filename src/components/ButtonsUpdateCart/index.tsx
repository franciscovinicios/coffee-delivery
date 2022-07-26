

import { Minus, Plus } from "phosphor-react"
import { ContainerButtonsUpdateCart, ContainerIcon } from "./styles"

export function ButtonsUpdateCart() {
  return (
    <ContainerButtonsUpdateCart>
      <ContainerIcon type="button">
        <Minus size={13} weight="bold" />
      </ContainerIcon>

      <span>0</span>

      <ContainerIcon type="button" >
        <Plus size={13} weight="bold" />
      </ContainerIcon>
    </ContainerButtonsUpdateCart>
  )
}