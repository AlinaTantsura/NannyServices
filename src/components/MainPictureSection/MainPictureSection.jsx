import pictBaby1x from "../images/baby@1x-min.png";
import pictBaby2x from "../images/baby@2x-min.png";
import sprite from "../images/sprite.svg";
import {
    AmountInfo,
    BoxTitle,
  IconBox,
  MainPictureSectionStyled,
  NanniesInfoBox,
  PictureBox,
} from "./MainPictureSection.styled";

const MainPictureSection = () => {
  return (
    <MainPictureSectionStyled>
      <PictureBox></PictureBox>
      <img
        src={pictBaby1x}
        srcSet={pictBaby1x + " 1x," + pictBaby2x + " 2x"}
        alt="Baby with nanny is watching book"
      />

      <NanniesInfoBox>
        <IconBox>
          <svg width="30" height="30">
            <use width="20" href={sprite + "#icon-feCheck0"} />
          </svg>
        </IconBox>
        <div>
          <BoxTitle>Experienced nannies</BoxTitle>
          <AmountInfo>15,000</AmountInfo>
        </div>
      </NanniesInfoBox>
    </MainPictureSectionStyled>
  );
};

export default MainPictureSection;
