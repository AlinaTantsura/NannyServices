
import Navigation from "../Navigation/Navigation"
import UserAuthBlock from "../UserAuthBlock/UserAuthBlock"
import { HeaderStyled, LogoLink } from "./Header.styled"

const Header = () => {
  return (
    <HeaderStyled>
        <LogoLink to="/">Nanny.Services</LogoLink>
        <Navigation />
        <UserAuthBlock />
    </HeaderStyled>
  )
}

export default Header