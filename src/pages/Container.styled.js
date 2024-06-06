import styled from "styled-components";

// export const MainHomepage = styled.main`
//     position: relative;
//     width: 100%;
//     height: 100vh;
// `;

export const Container = styled.div`
    position: absolute;
    top: 32px;
    left: 2.222%;
    right: 2.222%;
    max-width: 1376px;
    width: calc(100% - 2.222%);
    min-height: 736px;
    border-radius: 30px;
    overflow: hidden;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    z-index: 100;
    background-color: var(--main-color);
`;

export const MainContainer = styled.main`
    padding: 64px 8.888% 100px;
    position: relative;
    width: 100vw;
    max-width: 1440px;
    min-height: 100vh;
    height: fit-content;
    margin: 0 auto
`; 
