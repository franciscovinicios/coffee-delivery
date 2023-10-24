import { ButtonSubmit, ResumeCart, SelecetedCoffeesContainer } from "./styles";
import { TitleSection } from "../CompleteOrder/styles";
import { CoffeItemCard } from "./CoffeItemCard/CoffeItemCard";
import { CardTotalPrice } from "./CardTotalPrice/CardTotalPrice";
import { useCart } from "../../../hooks/useCart";

export function SelectedCoffees() {
  const { cart } = useCart();

  return (
    <SelecetedCoffeesContainer>
      <TitleSection>Cafés selecionados</TitleSection>
      <ResumeCart>
        {cart.map((coffe) => (
          <CoffeItemCard coffee={coffe} />
        ))}

        <CardTotalPrice />

        <ButtonSubmit type="submit">Confirmar Pedido</ButtonSubmit>
      </ResumeCart>
    </SelecetedCoffeesContainer>
  );
}
