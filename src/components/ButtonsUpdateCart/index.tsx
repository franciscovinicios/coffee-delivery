

import { Minus, Plus } from "phosphor-react"
import { ContainerButtonsUpdateCart, ContainerIcon } from "./styles"


interface ButtonsUpdateCartProps {
  decrementAmount: () => void
  incrementAmount: () => void
  amount: number
}

export function ButtonsUpdateCart({incrementAmount, decrementAmount, amount}: ButtonsUpdateCartProps) {
  return (
    <ContainerButtonsUpdateCart>
      <ContainerIcon type="button" onClick={decrementAmount} disabled={amount <= 1}>
        <Minus size={13} weight="bold" />
      </ContainerIcon>

      <span>{amount}</span>

      <ContainerIcon type="button" onClick={incrementAmount} >
        <Plus size={13} weight="bold" />
      </ContainerIcon>
    </ContainerButtonsUpdateCart>
  )
}