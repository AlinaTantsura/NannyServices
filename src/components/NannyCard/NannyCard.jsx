import Button from "../Button/Button";
import sprite from "../images/sprite.svg";
import {
  CardBox,
  DescriptionText,
  ImgBox,
  InfoBox,
  InfoBoxesContainer,
  InfoText,
  NannyName,
  PhotoOfNanny,
  TextHighlight,
  TextProfession,
  StyledReadMoreButton,
  AdditionalInfoBox,
  AdditionalInfoItem,
  DelimiterLine,
  StyledFavButton,
  StyledPriceSpan,
  ReviewsBox,
  ReviewCard,
  TitleBlockReviewCard,
  ImgLetter,
  RatingText,
  NameReviewBox,
  NameText,
  ReviewDescriptionText,
} from "./NannyCard.styled";

const NannyCard = () => {
  return (
    <CardBox>
      <ImgBox>
        <PhotoOfNanny />
      </ImgBox>
      <div>
        <div>
          <TextProfession>Nanny</TextProfession>
          <NannyName>Name</NannyName>
        </div>
        <InfoBoxesContainer>
          <InfoBox>
            <InfoText>
              Block <TextHighlight>divs</TextHighlight>
            </InfoText>
          </InfoBox>
          <InfoBox>
            <InfoText>
              Block <TextHighlight>divs</TextHighlight>
            </InfoText>
          </InfoBox>
          <InfoBox>
            <InfoText>
              Block <TextHighlight>divs</TextHighlight>
            </InfoText>
          </InfoBox>
        </InfoBoxesContainer>
        <DescriptionText>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis
          debitis fugit ratione nostrum tenetur, nobis non laborum repellat
          aperiam consequatur qui sapiente possimus? Quasi ducimus illum aliquam
          vitae tenetur nam.
        </DescriptionText>
        <StyledReadMoreButton>Read more</StyledReadMoreButton>
        <ReviewsBox>
          <ReviewCard>
            <TitleBlockReviewCard>
              <ImgLetter>N</ImgLetter>
              <NameReviewBox>
                <NameText>Name</NameText>
                <RatingText>
                  <svg width="16" height="16">
                    <use href={sprite + "#icon-star"} />
                  </svg>
                  4.5
                </RatingText>
              </NameReviewBox>
            </TitleBlockReviewCard>
            <ReviewDescriptionText>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
              eveniet consequuntur beatae quasi, delectus voluptatem molestias
              facere sapiente unde natus quod libero possimus illum pariatur
              saepe iure aperiam vitae eligendi!
            </ReviewDescriptionText>
          </ReviewCard>
          <ReviewCard>
            <TitleBlockReviewCard>
              <ImgLetter>N</ImgLetter>
              <NameReviewBox>
                <NameText>Name</NameText>
                <RatingText>
                  <svg width="16" height="16">
                    <use href={sprite + "#icon-star"} />
                  </svg>
                  4.5
                </RatingText>
              </NameReviewBox>
            </TitleBlockReviewCard>
            <ReviewDescriptionText>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
              eveniet consequuntur beatae quasi, delectus voluptatem molestias
              facere sapiente unde natus quod libero possimus illum pariatur
              saepe iure aperiam vitae eligendi!
            </ReviewDescriptionText>
          </ReviewCard>
        </ReviewsBox>
        <Button>Make an appointment</Button>
      </div>
      <AdditionalInfoBox>
        <AdditionalInfoItem>
          <svg width="16" height="16">
            <use href={sprite + "#icon-map-pin"} />
          </svg>
          location
        </AdditionalInfoItem>
        <DelimiterLine />
        <AdditionalInfoItem>
          <svg width="16" height="16">
            <use href={sprite + "#icon-star"} />
          </svg>
          Rating: 4.5
        </AdditionalInfoItem>
        <DelimiterLine />
        <AdditionalInfoItem>
          Price / 1 hour: <StyledPriceSpan>15$</StyledPriceSpan>
        </AdditionalInfoItem>
        <StyledFavButton>
          <svg width="26" height="26">
            <use href={sprite + "#icon-Property-1Normal"} />
          </svg>
        </StyledFavButton>
      </AdditionalInfoBox>
    </CardBox>
  );
};

export default NannyCard;
