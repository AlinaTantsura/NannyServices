import { Link } from "react-router-dom";
import styled from "styled-components";

export const HeaderStyled = styled.header`
background-color: var(--main-color);
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
  display: flex;
  flex-wrap: wrap;
  row-gap: 15px;
  column-gap: 21.180%;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 30px 8.888888888%;
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
  line-height: 100%;
`;

export const HeaderStyledHome = styled(HeaderStyled)`
  background-color: transparent;
  margin: 32px auto 0;
  width: calc(100% - 32px * 2);
  max-width: 1376px;
  box-shadow: none;
  column-gap: 35.392%;
  border-bottom: solid 1px rgba(251, 251, 251, 0.4);
`;

export const HomePageAuthBox = styled(PageAuthBox)`
  column-gap: 92px;
`;