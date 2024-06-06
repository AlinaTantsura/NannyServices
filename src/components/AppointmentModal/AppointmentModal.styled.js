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

export const InputWrapBox = styled.div`
  position: relative;
  width: calc((100% - 8px) / 2);
  p {
    margin: 0;
  }
`;

export const IconClock = styled.svg`
  position: absolute;
  right: 18px;
  top: 50%;
  pointer-events: none;
  transform: translateY(-50%);
`;

export const TimeListStyledBox = styled.div`
  position: absolute;
  width: 151px;
  height: 180px;
  border-radius: 12px;
  box-shadow: 0 20px 69px 0 rgba(0, 0, 0, 0.07);
  background-color: #fff;
  right: 0;
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
  li {
    cursor: pointer;
    display: flex;
    gap: 2px;
    line-height: 125%;
    color: rgba(17, 16, 28, 0.3);
    &:hover,
    &:focus {
      color: var(--text-black);
    }
  }
`;

export const TextAreaStyled = styled.textarea`
  border: 1px solid rgba(17, 16, 28, 0.1);
  border-radius: 12px;
  padding: 16px 18px;
  height: 116px;
  outline: none;
  font-family: var(--font-family-400);
  line-height: 125%;
  color: var(--text-black);
  &::placeholder {
    font-family: var(--font-family-400);
    line-height: 125%;
    color: var(--text-black);
  }
`;
