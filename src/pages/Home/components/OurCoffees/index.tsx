import { products } from "../../../../data/products";
import { CardCoffee } from "./CardCoffee/CardCoffee";

import { CardsCoffe, OurCoffesContainer, Title} from "./styles";

export function OurCoffees() {
  
  return (
    <OurCoffesContainer>
      <Title>Nossos Cafes</Title>

      <CardsCoffe>        
        {products.map(product => (
          <CardCoffee
            coffe={product}
            key={product.id}
          />
        ))}
      
      </CardsCoffe>
    </OurCoffesContainer>
  )
}