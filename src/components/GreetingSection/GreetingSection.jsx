import {
  AddInfoParag,
  GetStartedButton,
  GreetingSectionStyled,
  MainTitle,
} from "./GreetingSection.styled";
import sprite from "../images/sprite.svg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const GreetingSection = () => {
  const [isHoverIcon, setIsHoverIcon] = useState(false);
  const navigate = useNavigate();

  const handleHoverIcon = () => {
    setIsHoverIcon(!isHoverIcon)
  }
  return (
    <GreetingSectionStyled>
      <MainTitle onClick={()=>console.log("tittle")}>Make Life Easier for the Family:</MainTitle>
      <AddInfoParag>Find Babysitters Online for All Occasions</AddInfoParag>
      <GetStartedButton onMouseEnter={handleHoverIcon} onMouseLeave={handleHoverIcon} onClick={() => navigate('/nannies')}>
              Get started
                  <svg width="15" height="17">
          {/* <use href={isHoverIcon ? sprite + "#icon-Arrow-16-1" : sprite + "#icon-Arrow-16" } /> */}
          <use href={sprite + "#icon-Arrow-16" } />
        </svg>
             
        
      </GetStartedButton>
    </GreetingSectionStyled>
  );
};

export default GreetingSection;
