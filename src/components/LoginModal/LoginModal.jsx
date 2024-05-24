/* eslint-disable react/prop-types */
import ModalWindow from "../ModalWindow/ModalWindow";
import { useForm } from "react-hook-form";
import {
  IconEye,
  InputsBox,
  InputStyled,
  LogInForm,
  PassInputBox,
  FormTitle,
  FormDescription,
} from "./LoginModal.styled";
import Button from "../Button/Button";
import sprite from "../images/sprite.svg";
import { useState } from "react";

const LoginModal = ({ open, onClose }) => {
  const [isShownPass, setIsShownPass] = useState(false);
  const { register, handleSubmit } = useForm();

  const handleShowPass = () => {
    if (isShownPass) return setIsShownPass(false);
    setIsShownPass(true);
  };
  return (
    <ModalWindow open={open} onClose={onClose}>
      <LogInForm onSubmit={handleSubmit((data) => console.log(data))}>
        <FormTitle>Log In</FormTitle>
        <FormDescription>
          Welcome back! Please enter your credentials to access your account and
          continue your babysitter search.
        </FormDescription>

        <InputsBox>
          <InputStyled {...register("email")} placeholder="Email" />
          <PassInputBox>
            <InputStyled {...register("password")} placeholder="Password" />
            <IconEye onClick={handleShowPass} width="20" height="20">
              <use
                href={
                  isShownPass ? sprite + "#icon-eye" : sprite + "#icon-eye-off"
                }
              />
            </IconEye>
          </PassInputBox>
        </InputsBox>
        <Button>Log In</Button>
      </LogInForm>
    </ModalWindow>
  );
};

export default LoginModal;
