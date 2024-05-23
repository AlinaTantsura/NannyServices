import {
    AuthBox,
    ButtonLog,
  IconBox,
  TextStyled,
  UserBlock,
  UserInfoBox,
} from "./UserAuthBlock.styled";
import sprite from "../images/sprite.svg";
import { useState } from "react";
import Button from "../Button/Button";

const UserAuthBlock = () => {
    const [isLogIn] = useState(false);

    return (
         isLogIn ? (
            <UserBlock>
              <UserInfoBox>
                <IconBox>
                  <svg width="24px" height="24px">
                    <use href={sprite + "#icon-mdi_user"} />
                  </svg>
                </IconBox>
                <TextStyled>Name</TextStyled>
              </UserInfoBox>
              <ButtonLog>Log out</ButtonLog>
            </UserBlock>     
        ) : (<AuthBox>
                <ButtonLog>Log In</ButtonLog>
                <Button>Registration</Button>
      </AuthBox>) 
  );
};

export default UserAuthBlock;
