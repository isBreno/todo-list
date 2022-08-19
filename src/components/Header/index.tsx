// Imports
  import { HeaderContainer } from "./styles"
  import Logo from '../../assets/Logo.svg'
// Imports

export function Header() {

  return (
    <HeaderContainer>
      <img src={Logo} alt="Logo" />
    </HeaderContainer>
  )

}