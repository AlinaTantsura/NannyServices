import { Link } from "react-router-dom";
import styled from "styled-components";

export const HeaderStyled = styled.header`
  /* background-color: var(--main-color); */
  position: absolute;
  top: 24px;
  left: 24px;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* max-width: 1440px; */
  width: 1376px;
  padding: 30px 128px;
`;

export const LogoLink = styled(Link)`
  color: var(--text-white);
  font-size: 24px;
  line-height: 100%;
`;