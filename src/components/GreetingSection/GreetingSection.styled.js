import styled from "styled-components";
import { ButtonStyled } from "../Button/Button.styled";

export const GreetingSectionStyled = styled.section`
  margin-top: 283px;
  margin-left: 128px;
  width: 517px;
`;

export const MainTitle = styled.h1`
  font-size: 70px;
  line-height: 100%;
  letter-spacing: -0.03em;
  color: var(--main-white);
  margin-bottom: 28px;
`;

export const AddInfoParag = styled.p`
  font-family: var(--font-family-400);
  font-size: 28px;
  line-height: 107%;
  letter-spacing: -0.02em;
  color: var(--main-white);
`;

export const GetStartedButton = styled(ButtonStyled)`
position: relative;
  margin-top: 64px;
  border: solid 1px rgba(251, 251, 251, 0.4);
  padding: 18px 50px;
  font-size: 20px;
  line-height: 120%;
  letter-spacing: -0.01em;
  display: flex;
  gap: 18px;
  align-items: center;
  &:hover svg{
    transition: all 0.4s easy-in;
    transform: rotate(55deg);
  }
`;
