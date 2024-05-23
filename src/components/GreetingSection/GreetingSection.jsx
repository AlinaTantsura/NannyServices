import {
  AddInfoParag,
  GetStartedButton,
  GreetingSectionStyled,
  MainTitle,
} from "./GreetingSection.styled";
import sprite from "../images/sprite.svg";

const GreetingSection = () => {
  return (
    <GreetingSectionStyled>
      <MainTitle>Make Life Easier for the Family:</MainTitle>
      <AddInfoParag>Find Babysitters Online for All Occasions</AddInfoParag>
      <GetStartedButton>
              Get started
              <div>
                  <svg width="15" height="17">
          <use href={sprite + "#icon-Arrow-16"} />
        </svg>
              </div>
        
      </GetStartedButton>
    </GreetingSectionStyled>
  );
};

export default GreetingSection;
