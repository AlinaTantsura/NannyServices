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
import LoginModal from "../LoginModal/LoginModal";
import RegisterModal from "../RegisterModal/RegisterModal";

const UserAuthBlock = () => {
  const [isLogIn] = useState(false);
  const [isOpenLoginModal, setIsOpenLoginModal] = useState(false);
  const [isOpenRegisterModal, setIsOpenRegisterModal] = useState(false);

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
                <ButtonLog onClick={() => setIsOpenLoginModal(true)}>Log In</ButtonLog>
                <LoginModal open={isOpenLoginModal} onClose={() => setIsOpenLoginModal(false)} />
                <Button onClick={() => setIsOpenRegisterModal(true)}>Registration</Button>
                <RegisterModal open={isOpenRegisterModal} onClose={() => setIsOpenRegisterModal(false)} />
      </AuthBox>)
  );
};

export default UserAuthBlock;
