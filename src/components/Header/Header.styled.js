import { Link } from "react-router-dom";
import styled from "styled-components";

export const HeaderStyled = styled.header`
  background-color: var(--main-color);
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
  display: flex;
  flex-wrap: wrap;
  row-gap: 15px;
  column-gap: 21.18%;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 30px 8.888%;
`;

export const PageAuthBox = styled.div`
  display: flex;
  column-gap: 207px;
  align-items: center;
  row-gap: 15px;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
`;

export const LogoLink = styled(Link)`
  color: var(--main-white);
  font-size: 24px;
  line-height: 117%;
letter-spacing: -0.02em;
`;

export const HeaderStyledHome = styled(HeaderStyled)`
  position: absolute;
  top: 32px;
  left: 2.222%;
  z-index: 1000;
  background-color: transparent;
  width: 97.778%;
  padding-right: 5.902%;
  padding-left: 7.430%;
  max-width: 1376px;
  box-shadow: none;
  border-bottom: solid 1px rgba(251, 251, 251, 0.4);
  column-gap: 40%;
`;

export const HomePageAuthBox = styled(PageAuthBox)`
  column-gap: 92px;
`;
