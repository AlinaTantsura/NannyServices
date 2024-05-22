import { styled } from "styled-components";
import { Link } from "react-router-dom";

export const Header = styled.header`
  background-color: var(--main-color);
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: space-between;
  max-width: 1440px;
  padding: 30px 128px;
`;
export const LogoLink = styled(Link)`
  color: var(--text-white);
  font-size: 24px;
  line-height: 100%;
`;

export const Navigation = styled.nav`
    display: flex;
    gap: 40px;
`;

export const NavigationLink = styled(Link)`
  color: var(--text-white);
  font-family: var(--font-family-400);
  font-size: 16px;
  line-height: 125%;
  letter-spacing: -0.01em;
  text-align: center;
  display: flex;
  flex-direction: column;
justify-content: center;
`;

// &::after{
//     content: '';
//     display: inline-block;
    
    
//        width: 8px;
//        height: 8px;
//        /* -moz-border-radius: 7.5px;
//        -webkit-border-radius: 7.5px; */
//        border-radius: 100%;
//        background-color: var(--text-white);
//   }