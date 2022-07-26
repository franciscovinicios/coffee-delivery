import LogoCoffeDelivery from '../../assets/logo.svg'
import { HeaderButton, HeaderButtonsContainer, HeaderContainer } from './styles'
import { MapPin, ShoppingCart } from "phosphor-react";
import { NavLink } from 'react-router-dom';


export function Header() {
  return (
    <HeaderContainer>
      <div className='containerContent'>
        <NavLink to={'/'}>
          <img src={LogoCoffeDelivery} alt="" />
        </NavLink>

        <HeaderButtonsContainer>
          <HeaderButton variant='purple'>
            <MapPin size={20} weight="fill" />
            Rio de Janeiro, RJ
          </HeaderButton>
          <NavLink to={'/checkout'}>
            <HeaderButton variant='yellow'>
              <ShoppingCart size={20} weight="fill" />
              <span>{0}</span>
            </HeaderButton>
          </NavLink>
        </HeaderButtonsContainer>
      </div>

    </HeaderContainer>
  )
} 