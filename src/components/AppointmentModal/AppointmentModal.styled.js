import styled from "styled-components";

export const NannyInfoBox = styled.div`
    display: flex;
    gap: 14px;
    margin-bottom: 40px;
`;

export const PhotoOfNanny = styled.img`
  border-radius: 15px;
  width: 44px;
  height: 44px;
  background-color: #e0e0e0;
  border: none;
`;

export const AddNameText = styled.p`
    font-size: 12px;
line-height: 133%;
color: var(--text-gray);
`;

export const NameBlock = styled.div`
        display: flex;
    flex-direction: column;
    justify-content: space-around;
`;

export const InputAppointmentBox = styled.div`
    display: flex;
    flex-wrap: wrap;
    column-gap: 8px;
    row-gap: 16px;
    margin-bottom: 40px;

`;

export const InputWrapBox = styled.div`
    position: relative;
   width: calc((100% - 8px) / 2);
   p{
    margin: 0;
   }
`;

// export const InputStyledTime = styled(InputStyled)`
//     position: relative;
// `;

export const TimeListStyledBox = styled.div`
    position: absolute;
    width: 151px;
    height: 180px;
    border-radius: 12px;
    box-shadow: 0 20px 69px 0 rgba(0, 0, 0, 0.07);
    background-color: #fff;
    right:0;
    top: 68px;
    padding: 16px;
`;

export const TimeListStyled = styled.ul`
    margin-top: 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 108px;
    gap: 4px;
    overflow-y: scroll;
    -ms-overflow-style: none;
      scrollbar-width: none;
    li{
        cursor: pointer;
        display: flex;
        gap: 2px;
        line-height: 125%;
        color: rgba(17, 16, 28, 0.3);
        &:hover,
        &:focus{
            color: var(--text-black);
        }
    };
`;

