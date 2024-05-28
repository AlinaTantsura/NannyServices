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


`;

export const InpunFullAppoinmentBox = styled.div`
    display:flex;
    flex-direction: column;
    gap: 16px;
    margin-top: 16px;
    margin-bottom: 40px;
`;