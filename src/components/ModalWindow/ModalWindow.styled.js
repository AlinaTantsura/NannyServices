import styled from "styled-components";

export const BackdropStyled = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(11, 11, 11, 0.6);
    z-index: 1000;
`;

export const ModalStyled = styled.div`
    position: absolute;
    border-radius: 30px;
    width: 565px;
    top: 50%;
    left: 50%;
    padding: 64px;
    background-color: var(--main-white);
    z-index: 1000;
`;