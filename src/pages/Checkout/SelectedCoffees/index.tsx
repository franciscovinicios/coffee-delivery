import { ButtonSubmit, ResumeCart, SelecetedCoffeesContainer } from "./styles";
import { TitleSection } from "../CompleteOrder/styles";
import { CoffeItemCard } from "./CoffeItemCard/CoffeItemCard";
import { CardTotalPrice } from "./CardTotalPrice/CardTotalPrice";

export function SelectedCoffees() {
  return (
    <SelecetedCoffeesContainer>
      <TitleSection>Cafés selecionados</TitleSection>
      <ResumeCart>
        <CoffeItemCard />
        <CoffeItemCard />
        <CoffeItemCard />

        <CardTotalPrice />

        <ButtonSubmit>Confirmar Pedido</ButtonSubmit>
      </ResumeCart>
    </SelecetedCoffeesContainer>
  );
}
