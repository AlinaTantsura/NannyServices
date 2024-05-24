import styled from "styled-components";

export const BackdropStyled = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(11, 11, 11, 0.6);
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalStyled = styled.div`
  position: absolute;
  border-radius: 30px;
  width: 565px;
  /* top: 30%;
  left: 30%; */
  padding: 64px;
  background-color: var(--main-white);
  z-index: 1000;
`;

export const CloseBtn = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  border: none;
  background-color: transparent;
  cursor: pointer;
  transform: scale(1);
  transition: var(--transition);
  svg {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &:hover {
    transform: scale(1.1);
  }
`;

