import { useLocation } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import UserAuthBlock from "../UserAuthBlock/UserAuthBlock";
import {
  HeaderStyled,
  LogoLink,
  HeaderStyledHome,
  HomePageAuthBox,
  PageAuthBox,
} from "./Header.styled";

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
      <PageAuthBox>
        <Navigation />
        <UserAuthBlock />
      </PageAuthBox>
    </HeaderStyled>
  );
};

export default Header;
