/* eslint-disable react/prop-types */
import { useState } from "react";
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
  GreenCircleBox,
  GreenCircle,
} from "./NannyCard.styled";
import AppointmentModal from "../AppointmentModal/AppointmentModal";
import ReviewCard from "./ReviewCard";
import { addToTheFavorite } from "../../redux-toolkit/fetchNaniesData/nanniesSlice";
import { useDispatch } from "react-redux";
// import { useSelector } from "react-redux";
// import { selectIsLogIn } from "../../redux-toolkit/user/selectors";

// eslint-disable-next-line react/prop-types
const NannyCard = ({ data }) => {
  const [isOpenAllInfo, setIsOpenAllInfo] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const dispatch = useDispatch();
  // const isLogin = useSelector(selectIsLogIn);

  const countAge = (birthdayData) => {
    const today = new Date();
    const todayYear = today.getFullYear();
    const todayMonth = today.getMonth() + 1;
    const todayDate = today.getDate();
    const birthday = new Date(birthdayData);
    const birthdayYear = birthday.getFullYear();
    const birthdayMonth = birthday.getMonth() + 1;
    const birthdayDate = birthday.getDate();
    let age;
    if (todayMonth > birthdayMonth) age = todayYear - birthdayYear;
    else if (todayMonth < birthdayMonth) age = todayYear - birthdayYear - 1;
    else {
      if (todayDate >= birthdayDate) age = todayYear - birthdayYear;
      else age = todayYear - birthdayYear - 1;
    }
    return age;
  };

  return (
    <CardBox>
      <ImgBox>
        <PhotoOfNanny src={data.avatar_url} alt="Photo of nanny"/>
        <GreenCircleBox>
          <GreenCircle />
        </GreenCircleBox>
      </ImgBox>
      <div>
        <div>
          <TextProfession>Nanny</TextProfession>
          <NannyName>{data.name}</NannyName>
        </div>
        <InfoBoxesContainer>
          <InfoBox>
            <InfoText>
              Age:{" "}
              <TextHighlight style={{ textDecoration: "underline" }}>
                {countAge(data.birthday)}
              </TextHighlight>
            </InfoText>
          </InfoBox>
          <InfoBox>
            <InfoText>
              Experience: <TextHighlight>{data.experience}</TextHighlight>
            </InfoText>
          </InfoBox>
          <InfoBox>
            <InfoText>
              Kids Age: <TextHighlight>{data.kids_age}</TextHighlight>
            </InfoText>
          </InfoBox>
          <InfoBox>
            <InfoText>
              Characters:{" "}
              <TextHighlight>
                {data.characters
                  .map((item) => item.replace(item[0], item[0].toUpperCase()))
                  .join(", ")}
              </TextHighlight>
            </InfoText>
          </InfoBox>
          <InfoBox>
            <InfoText>
              Education: <TextHighlight>{data.education}</TextHighlight>
            </InfoText>
          </InfoBox>
        </InfoBoxesContainer>
        <DescriptionText>{data.about}</DescriptionText>
        {isOpenAllInfo ? (
          <>
            {data.reviews && (
              <ReviewsBox>
                {data.reviews.map((review) => (
                  <ReviewCard key={review.reviewer} data={review} />
                ))}
              </ReviewsBox>
            )}

            <Button type="button" onClick={() => setIsOpenModal(true)}>
              Make an appointment
            </Button>
            {isOpenModal && (
              <AppointmentModal
                imgURL={data.avatar_url}
                name={data.name}
                open={isOpenModal}
                onClose={() => setIsOpenModal(false)}
              />
            )}
          </>
        ) : (
          <StyledReadMoreButton
            type="button"
            onClick={() => setIsOpenAllInfo(true)}
          >
            Read more
          </StyledReadMoreButton>
        )}
      </div>
      <AdditionalInfoBox>
        <AdditionalInfoItem>
          <svg width="16" height="16">
            <use href={sprite + "#icon-map-pin"} />
          </svg>
          {data.location}
        </AdditionalInfoItem>
        <DelimiterLine />
        <AdditionalInfoItem>
          <svg width="16" height="16">
            <use href={sprite + "#icon-star"} />
          </svg>
          Rating: {data.rating}
        </AdditionalInfoItem>
        <DelimiterLine />
        <AdditionalInfoItem>
          Price / 1 hour:{" "}
          <StyledPriceSpan>{data.price_per_hour}$</StyledPriceSpan>
        </AdditionalInfoItem>
        {/* <StyledFavButton onClick={() => alert("You will be able to choose this nanny to your favorite list when you will be authorized. Please register or login")}> */}
        <StyledFavButton onClick={() => dispatch(addToTheFavorite(data))}>
          <svg width="26" height="26">
            <use href={sprite + "#icon-Property-1Normal"} />
          </svg>
        </StyledFavButton>
      </AdditionalInfoBox>
    </CardBox>
  );
};

export default NannyCard;
