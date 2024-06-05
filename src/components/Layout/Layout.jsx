import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { BodyContainer } from "./Layout.styled";
import Header from "../Header/Header";


const Layout = () => {
  return (
    <BodyContainer>
      <Header />
      <Suspense>
        <Outlet />
      </Suspense>
      </BodyContainer>
  );
};

export default Layout;
