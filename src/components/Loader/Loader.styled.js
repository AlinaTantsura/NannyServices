import styled, { keyframes } from "styled-components";

const move1 = keyframes`
    100% {top:-0.2px}
`;
const move2 = keyframes`
    4%,96% {transform: scaleY(1)}
`;
const move3 = keyframes`
    100% {transform: scaleY(0.3) translate(0.1px,-0.1px)}
`;

export const LoaderStyled = styled.div`
    width: 30px;
    aspect-ratio: 1;
    display: grid;
    transform: translateY(100%);
    &::before,
    &::after{
        content: "";
        grid-area: 1/1;
        border-radius: 50%;
        transform-origin: bottom;
        position: relative;
    };
    &::before{
        background: radial-gradient(at 30% 30%,#0000,#000a) var(--main-color);
        transform: scaleY(0.65);
        top: 0;
        animation: ${move1}, ${move2};
        animation-duration: 2s;
        animation-timing-function: cubic-bezier(0,400,1,400),ease;
        animation-iteration-count: infinite;
    };
    &:after{
        background: #ccc;
        filter: blur(8px);
        transform: scaleY(0.3) translate(0px,0px);
        left: 0;
        animation: ${move3} 2s cubic-bezier(0,400,1,400) infinite;
    }
`;

export const LoaderContainer = styled.div`
    width: 100%;
    height: 50vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;