import styled from "styled-components";

export const ButtonStyled = styled.button`
    padding: 14px 40px;
    color: var(--main-white);
    font-size: 16px;
    line-height: 125%;
    letter-spacing: -0.01em;
    cursor: pointer;
    border-radius: 30px;
    border: none;
    background-color: var(--main-color);
    transition: all 0.4s ease-in;
    &:hover,
    &:focus{
        /* border: solid 1px var(--main-white); */
        box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
        background-color:  #084EAF;
    };
    &:active{
        opacity: 70%;
    }


`