import styled from "styled-components";

export const MainPictureSectionStyled = styled.section`
  /* width: 699px; */
  position: relative;
      width: 49.201%;
      min-width: 320px;
    min-height: 400px;
    max-height: 736px;
  img {
    /* position: absolute;
    top: 0;
    left: 0; */
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const PictureBox = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  background-color: rgba(18, 20, 23, 0.6);
  width: 100%;
  height: 100%;
  z-index: 10;
`;

export const NanniesInfoBox = styled.div`
    position: absolute;
    right: 50px;
    bottom: 50px;
    width: 284px;
    height: 118px;
    border-radius: 20px;
    background-color: var(--main-white);
    z-index: 11;
    display: flex;
    gap: 16px;
    padding: 32px;
    right: 7.385%;
    bottom: 6.793%;
    width: 41.949%;
    min-width: 200px;
    height: 118px;
    border-radius: 20px;
    background-color: var(--main-white);
    z-index: 11;
    display: flex;
    gap: 16px;
    padding: 32px;
    align-items: center;
`;

export const IconBox = styled.div`
    width: 54px;
    height: 54px;
    border-radius: 13px;
    background-color: var(--main-color);
    display: flex;
    justify-content: center;
    align-items: center;
    svg{
        padding-left: 5px;
    }
`;

export const BoxTitle = styled.h5`
    font-family: var(--font-family-400);
color: rgba(17, 16, 28, 0.5);
margin-bottom: 6px;
`;

export const AmountInfo = styled.p`
    font-family: var(--font-family-700);
    font-size: 24px;
    color: var(--text-black);
`;

