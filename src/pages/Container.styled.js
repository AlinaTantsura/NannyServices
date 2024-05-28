import styled from "styled-components";

export const Container = styled.div`
    position: absolute;
    top: 24px;
    left: 24px;
    width: 1376px;
    height: 736px;
    border-radius: 30px;
    background-color: var(--main-color);
    z-index: -1;
    overflow: hidden;
    display: flex;
    justify-content: space-between;
`;

export const MainContainer = styled.main`
    padding: 64px 128px 100px;
    position: relative;
`;