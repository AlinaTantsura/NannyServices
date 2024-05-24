import { Link } from "react-router-dom";
import styled from "styled-components";

export const NavigationList = styled.nav`
  display: flex;
  gap: 40px;
  align-items: flex-start;
  .active-link::after {
    content: "";
    margin-top: 4px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: var(--main-white);
    align-self: center;
  }
`;

export const NavigationLink = styled(Link)`
  color: var(--main-white);
  font-family: var(--font-family-400);
  font-size: 16px;
  line-height: 125%;
  letter-spacing: -0.01em;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  transition: var(--transition);
  &:hover,
  &:focus{
    font-family: var(--font-family-500);
  }
`;
