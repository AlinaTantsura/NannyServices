
import { useLocation } from "react-router-dom"
import Navigation from "../Navigation/Navigation"
import UserAuthBlock from "../UserAuthBlock/UserAuthBlock"
import { HomePageAuthBox, HeaderStyled, LogoLink, HeaderStyledHome } from "./Header.styled"

const Header = () => {
  const location = useLocation();
  const isHome = location.pathname === "/" ? true : false;
  return isHome ? (
  <HeaderStyledHome>
      <LogoLink to="/">Nanny.Services</LogoLink>
      <HomePageAuthBox>
        <Navigation />
        <UserAuthBlock />
        </HomePageAuthBox>
    </HeaderStyledHome>
  ) : (
      <HeaderStyled>
        <LogoLink to="/">Nanny.Services</LogoLink>
        <Navigation />
        <UserAuthBlock />
    </HeaderStyled>
  )

}

export default Header