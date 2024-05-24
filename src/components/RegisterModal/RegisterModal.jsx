/* eslint-disable react/prop-types */
import ModalWindow from "../ModalWindow/ModalWindow"
import Button from "../Button/Button";
import { RegisterForm } from "./RegisterModal.styled"
import sprite from "../images/sprite.svg";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FormDescription, FormTitle, IconEye, InputsBox, InputStyled, PassInputBox} from "../LoginModal/LoginModal.styled";


const RegisterModal = ({ open, onClose }) => {
    const [isShownPass, setIsShownPass] = useState(false);
  const { register, handleSubmit } = useForm();

  const handleShowPass = () => {
    if (isShownPass) return setIsShownPass(false)
    setIsShownPass(true)
  };
  

    return (
      <ModalWindow open={open} onClose={onClose}>
          <RegisterForm onSubmit={handleSubmit((data) => console.log(data))}>
        <FormTitle>Registration</FormTitle>
        <FormDescription>
          Thank you for your interest in our platform! In order to register, we need some information. Please provide us with the following information.
        </FormDescription>
          <InputsBox>
          <InputStyled {...register("name")} placeholder="Name" />
          <InputStyled {...register("email")} placeholder="Email" />
          <PassInputBox>
          <InputStyled {...register("password")} placeholder="Password" />
          <IconEye onClick={handleShowPass} width="20" height="20">
              <use href={isShownPass ? sprite + "#icon-eye"
                : sprite + "#icon-eye-off"} />
            </IconEye>
          </PassInputBox>
        </InputsBox>
        <Button>Register</Button>
      </RegisterForm>    
      </ModalWindow>
  )
}

export default RegisterModal 