import { useLocation } from "react-router-dom";
import { NavigationLink, NavigationList } from "./Navigation.styled"
import { useState } from "react";

const Navigation = () => {
  const location = useLocation();
  const [isLogIn] = useState(false);


  return (
    <NavigationList>
          <NavigationLink className={location.pathname === "/" ? "active-link" : ""} to="/">Home</NavigationLink>
          <NavigationLink className={location.pathname === "/nannies" ? "active-link" : ""} to="/nannies">Nannies</NavigationLink>
      {isLogIn && <NavigationLink className={location.pathname === "/favorites" ? "active-link" : ""} to="/favorites">Favorites</NavigationLink>}
        </NavigationList>
  )
}

export default Navigation