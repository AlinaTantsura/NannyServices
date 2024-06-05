import { useLocation } from "react-router-dom";
import { NavigationLink, NavigationList } from "./Navigation.styled"
import { useSelector } from "react-redux";
import { selectIsLogIn } from "../../redux-toolkit/user/selectors";


const Navigation = () => {
  const location = useLocation();
  const isHome = location.pathname === "/" ? true : false;
  const isLogin = useSelector(selectIsLogIn);
 

  return (
    isHome ? (
    <NavigationList>
          <NavigationLink to="/">Home</NavigationLink>
          <NavigationLink className={location.pathname === "/nannies" ? "active-link" : ""} to="/nannies">Nannies</NavigationLink>
        </NavigationList>
    ) : (
        <NavigationList>
          <NavigationLink to="/">Home</NavigationLink>
          <NavigationLink className={location.pathname === "/nannies" ? "active-link" : ""} to="/nannies">Nannies</NavigationLink>
      {(!isHome && isLogin) && <NavigationLink className={location.pathname === "/favorites" ? "active-link" : ""} to="/favorites">Favorites</NavigationLink>}
        </NavigationList>
    )
    
  )
}

export default Navigation