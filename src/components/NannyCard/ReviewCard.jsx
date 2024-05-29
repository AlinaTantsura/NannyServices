/* eslint-disable react/prop-types */
import {
  ImgLetter,
  NameReviewBox,
  NameText,
  RatingText,
  ReviewCardStyled,
  ReviewDescriptionText,
  TitleBlockReviewCard,
} from "./NannyCard.styled";
import sprite from "../images/sprite.svg";

const ReviewCard = ({ data }) => {
  return (
    <ReviewCardStyled>
      <TitleBlockReviewCard>
              <ImgLetter>{data.reviewer[0]}</ImgLetter>
        <NameReviewBox>
          <NameText>{data.reviewer}</NameText>
          <RatingText>
            <svg width="16" height="16">
              <use href={sprite + "#icon-star"} />
            </svg>
            {data.rating.toFixed(1)}
          </RatingText>
        </NameReviewBox>
      </TitleBlockReviewCard>
      <ReviewDescriptionText>{data.comment}</ReviewDescriptionText>
    </ReviewCardStyled>
  );
};

export default ReviewCard;
