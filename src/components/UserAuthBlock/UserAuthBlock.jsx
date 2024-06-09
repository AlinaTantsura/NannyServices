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
import LoginModal from "../LoginModal/LoginModal";
import RegisterModal from "../RegisterModal/RegisterModal";
import { useDispatch, useSelector } from "react-redux";
import { selectIsLogIn, selectName } from "../../redux-toolkit/user/selectors";
import { logOutUser } from "../../redux-toolkit/user/operations";
import { useNavigate } from "react-router-dom";
import { ButtonStyled } from "../Button/Button.styled";

const UserAuthBlock = () => {
  const [isOpenLoginModal, setIsOpenLoginModal] = useState(false);
  const [isOpenRegisterModal, setIsOpenRegisterModal] = useState(false);
  const name = useSelector(selectName);
  const isLogIn = useSelector(selectIsLogIn);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogOut = () => {
    navigate("/");
    dispatch(logOutUser());
    
  }
  return isLogIn ? (
    <UserBlock>
      <UserInfoBox>
        <IconBox>
          <svg width="24px" height="24px">
            <use href={sprite + "#icon-mdi_user"} />
          </svg>
        </IconBox>
        <TextStyled>{name}</TextStyled>
      </UserInfoBox>
      <ButtonLog onClick={handleLogOut}>Log out</ButtonLog>
    </UserBlock>
  ) : (
    <AuthBox>
      <ButtonLog onClick={() => setIsOpenLoginModal(true)}>Log In</ButtonLog>
      <LoginModal
        open={isOpenLoginModal}
        onClose={() => setIsOpenLoginModal(false)}
      />
      <ButtonStyled onClick={() => setIsOpenRegisterModal(true)}>Registration</ButtonStyled>
      <RegisterModal
        open={isOpenRegisterModal}
        onClose={() => setIsOpenRegisterModal(false)}
      />
    </AuthBox>
  );
};

export default UserAuthBlock;
