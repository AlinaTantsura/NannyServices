import styled from "styled-components";
import { ButtonStyled } from "../Button/Button.styled";

export const UserBlock = styled.div`
  display: flex;
  justify-content: center;
  gap: 24px;
`;

export const UserInfoBox = styled.div`
  display: flex;
  gap: 14px;
  align-items: center;
`;
export const IconBox = styled.div`
  width: 40px;
  height: 40px;
  background-color: var(--text-white);
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TextStyled = styled.p`
  color: var(--text-white);
  font-size: 18px;
  line-height: 111%;
  letter-spacing: -0.01em;
`;

export const ButtonLog = styled(ButtonStyled)`
    border: solid 1px rgba(251, 251, 251, 0.4);
    background-color: transparent;
    padding: 14px 39px;
`

export const AuthBox = styled.div`
    display: flex;
    gap: 8px;
`