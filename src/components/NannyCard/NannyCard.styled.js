import styled from "styled-components";

export const CardBox = styled.div`
  border-radius: 24px;
  /* max-width: 1184px; */
  width: 100%;
  background-color: var(--main-white);
  padding: 24px;
  position: relative;
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
`;

export const ImgBox = styled.div`
position: relative;
  width: 120px;
  height: 120px;
  padding: 12px;
  border: 2px solid rgba(9, 87, 195, 0.2);
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PhotoOfNanny = styled.img`
  border-radius: 15px;
  width: 96px;
  height: 96px;
  background-color: #e0e0e0;
  border: none;
`;

export const GreenCircleBox = styled.div`
position: absolute;
top: 14px;
right: 14px;
transform: translateX(50%) translateY(-50%);
width: 14px;
height: 14px;
  border-radius: 50%;
  background-color: var(--main-white);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const GreenCircle = styled.div`
width: 9px;
height: 9px;
  border-radius: 50%;
  background-color: #38CD3E;
`;

export const MainNannyInfo = styled.div`
  max-width: 86.531%;
`;

export const TitleBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
  row-gap: 24px;
  margin-bottom: 24px;
  margin-right: 98px;
`;

export const TextProfession = styled.p`
  line-height: 150%;
  color: var(--text-gray);
  margin-bottom: 8px;
`;

export const NannyName = styled.h2`
  font-size: 24px;
  line-height: 100%;
`;

export const InfoBoxesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;
export const InfoBox = styled.div`
  border-radius: 24px;
  padding: 8px 16px;
  background-color: #f3f3f3;
`;

export const InfoText = styled.p`
  line-height: 150%;
  color: var(--text-gray);
`;

export const TextHighlight = styled.span`
  color: var(--text-black);
`;

export const DescriptionText = styled.p`
  margin: 24px 0px 18px;
  font-family: var(--font-family-400);
  line-height: 125%;
  color: rgba(17, 16, 28, 0.5);
`;

export const StyledReadMoreButton = styled.button`
  border: none;
  margin-bottom: 24px;
  cursor: pointer;
  background-color: transparent;
  line-height: 150%;
  text-decoration: underline;
  text-decoration-skip-ink: none;
  color: var(--text-black);
`;

export const AdditionalInfoBox = styled.div`
  /* position: absolute;
  top: 24px;
  right: 8.445%; */
  /* max-width: 35,726%; */
  display: flex;
  flex-wrap: wrap;
  column-gap: 16px;
  row-gap: 8px;
  align-items: center;
`;

export const AdditionalInfoItem = styled.p`
  display: flex;
  gap: 8px;
  align-items: center;
  align-content: center;
  justify-content: center;
  color: var(--text-black);
`;

export const DelimiterLine = styled.hr`
  width: 1px;
  height: 16px;
  border-color: rgba(17, 16, 28, 0.2);
`;

export const StyledPriceSpan = styled.span`
  color: #38cd3e;
`;

export const StyledFavButton = styled.button`
  /* margin-left: 50px; */
  position: absolute;
  top: 24px;
  right: 24px;
  border: none;
  background-color: transparent;
  cursor: pointer;
  /* display: flex; */
`;

export const ReviewsBox = styled.ul`
  margin: 24px 0;
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

export const ReviewCardStyled = styled.li`
  max-width: 482px;
`;

export const TitleBlockReviewCard = styled.div`
  display: flex;
  gap: 12px;
  margin-bottom: 16px;
`;

export const ImgLetter = styled.div`
  border-radius: 100px;
  width: 44px;
  height: 44px;
  background-color: rgba(9, 87, 195, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  line-height: 100%;
  color: var(--main-color);
`;

export const NameReviewBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const RatingText = styled.p`
  font-size: 14px;
  line-height: 129%;
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const NameText = styled.p`
  line-height: 125%;
`;

export const ReviewDescriptionText = styled.p`
  font-family: var(--font-family-400);
  line-height: 125%;
  color: rgba(17, 16, 28, 0.5);
`;
