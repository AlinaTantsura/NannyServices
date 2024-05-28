import styled from "styled-components";
import { ButtonStyled } from "../Button/Button.styled";

export const SelectStyled = styled.div`
  display: flex;
  flex-direction: column;
  width: 226px;
  gap: 8px;
`;

export const FilterLabel = styled.h3`
  font-size: 14px;
  line-height: 129%;
  color: var(--text-gray);
`;

export const SelectButtonStyled = styled(ButtonStyled)`
  border-radius: 14px;
  display: flex;
  padding: 16px 18px;
  width: 100%;
  font-size: 18px;
  line-height: 111%;
  position: relative;
  svg {
    position: absolute;
    top: 16px;
    right: 18px;
    padding-left: 5px;
    pointer-events: none;
  }
`;

export const OptionsList = styled.ul`
  position: relative;
  border-radius: 14px;
  width: 226px;
  padding: 18px 0;
  box-shadow: 0 20px 69px 0 rgba(0, 0, 0, 0.07);
  background: #fff;
  display: flex;
  flex-direction: column;
  gap: 12px;
  z-index: 2;
`;

export const Option = styled.li`
  font-family: var(--font-family-400);
  font-size: 18px;
  line-height: 111%;
  color: rgba(17, 16, 28, 0.3);
  cursor: pointer;
  padding: 0 18px;
  &:hover,
  &:focus {
    color: var(--text-black);
  }
  &.checked{
    color: var(--text-black);
  }
`;
