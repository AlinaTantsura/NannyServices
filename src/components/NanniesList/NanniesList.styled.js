import styled from "styled-components";
import { ButtonStyled } from "../Button/Button.styled";

export const NanniesListContainer = styled.div`
    position: absolute;
    top: 168px;
    left: 128px;
    padding-bottom: 100px;
    text-align: center;
    
`;

export const NanniesListStyled = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 32px;
    text-align: start;
`;

export const LoadMoreBtn = styled(ButtonStyled)`
    margin-top: 64px;
`;