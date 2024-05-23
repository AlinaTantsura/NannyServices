import { Link } from "react-router-dom";
import styled from "styled-components";

export const HeaderStyled = styled.header`
background-color: var(--main-color);
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1440px;
  padding: 30px 128px;
`;
export const HeaderStyledHome = styled(HeaderStyled)`
  background-color: transparent;
  position: absolute;
  top: 24px;
  left: 24px;
  width: 1376px;
  box-shadow: none;
  border-bottom: solid 1px rgba(251, 251, 251, 0.4);
`;

export const LogoLink = styled(Link)`
  color: var(--text-white);
  font-size: 24px;
  line-height: 100%;
`;

export const HomePageAuthBox = styled.div`
  display: flex;
  gap: 92px;
  align-items: center;
`;