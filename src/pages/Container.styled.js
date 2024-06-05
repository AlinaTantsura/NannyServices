import styled from "styled-components";

// export const MainHomepage = styled.main`
//     position: relative;
//     width: 100%;
//     height: 100vh;
// `;

export const Container = styled.div`
    position: absolute;
    top: 32px;
    left: 32px;
    max-width: 1376px;
    width: calc(100% - 32px * 2);
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
