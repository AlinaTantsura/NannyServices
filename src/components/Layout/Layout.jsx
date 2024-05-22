import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Header, LogoLink, Navigation, NavigationLink } from "./Layout.styled";

const Layout = () => {
  return (
    <>
      <Header>
        <LogoLink to="/">Nanny.Services</LogoLink>
        <Navigation>
          <NavigationLink to="/">Home</NavigationLink>
          <NavigationLink to="/nannies">Nannies</NavigationLink>
          <NavigationLink to="/favorites">Favorites</NavigationLink>
        </Navigation>
        <div>User block</div>
      </Header>
      <Suspense>
        <Outlet />
      </Suspense>
    </>
  );
};

export default Layout;
