import { useLocation } from "react-router-dom";
import { NavigationLink, NavigationList } from "./Navigation.styled"


const Navigation = () => {
  const location = useLocation();
const isHome = location.pathname === "/" ? true : false;


  return (
    <NavigationList>
          <NavigationLink to="/">Home</NavigationLink>
          <NavigationLink className={location.pathname === "/nannies" ? "active-link" : ""} to="/nannies">Nannies</NavigationLink>
      {!isHome && <NavigationLink className={location.pathname === "/favorites" ? "active-link" : ""} to="/favorites">Favorites</NavigationLink>}
        </NavigationList>
  )
}

export default Navigation