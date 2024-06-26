import styled from "styled-components";
import { ButtonStyled } from "../Button/Button.styled";

export const NanniesListContainer = styled.div`
    /* position: absolute;
    top: 168px;
    left: 128px; */
    /* padding-bottom: 100px; */
    padding-top: 32px;
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

export const EmptyListText = styled.p`
    margin-top: 30px;
    font-family: var(--font-family-700);
`;