/* eslint-disable react/prop-types */
import * as yup from "yup";
import { createUserWithEmailAndPassword } from "firebase/auth";
import ModalWindow from "../ModalWindow/ModalWindow";
import Button from "../Button/Button";
import { RegisterForm } from "./RegisterModal.styled";
import sprite from "../images/sprite.svg";
import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  ErrorMessage,
  FormDescription,
  FormTitle,
  IconEye,
  InputsBox,
  InputStyled,
  PassInputBox,
} from "../LoginModal/LoginModal.styled";
import { yupResolver } from "@hookform/resolvers/yup";
import { auth } from "../../firebase/firebase";
import { useDispatch } from "react-redux";
import { setUser } from "../../redux-toolkit/user/userSlice";

const RegisterFormValidateSchema = yup.object().shape({
  name: yup.string().trim().required("Name is required").min(2),
  email: yup
    .string()
    .required("Email is required")
    .matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, "Email is not valid"),
  password: yup.string().required("Password is required").min(6),
});

const RegisterModal = ({ open, onClose }) => {
  const [isShownPass, setIsShownPass] = useState(false);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(RegisterFormValidateSchema) });

  const handleShowPass = () => {
    if (isShownPass) return setIsShownPass(false);
    setIsShownPass(true);
  };

  const handleRegisterSubmit = ({email, password, name}) => {
    createUserWithEmailAndPassword(auth, email, password, name)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user)
        dispatch(setUser({email: user.email, token: user.accessToken, id: user.uid, name: user.displayName}));
      })
      .catch(console.error);
    reset();
    onClose(true);
  };

  return (
    <ModalWindow open={open} onClose={onClose}>
      <RegisterForm onSubmit={handleSubmit(handleRegisterSubmit)}>
        <FormTitle>Registration</FormTitle>
        <FormDescription>
          Thank you for your interest in our platform! In order to register, we
          need some information. Please provide us with the following
          information.
        </FormDescription>
        <InputsBox>
          <InputStyled type="text" {...register("name")} placeholder="Name" />
          <ErrorMessage>{errors.name?.message}</ErrorMessage>
          <InputStyled type="email" {...register("email")} placeholder="Email" />
          <ErrorMessage>{errors.email?.message}</ErrorMessage>

          <PassInputBox>
            <InputStyled type={isShownPass ? "text" : "password"} {...register("password")} placeholder="Password" />
            <IconEye onClick={handleShowPass} width="20" height="20">
              <use
                href={
                  isShownPass ? sprite + "#icon-eye" : sprite + "#icon-eye-off"
                }
              />
            </IconEye>
          </PassInputBox>
          <ErrorMessage>{errors.password?.message}</ErrorMessage>
        </InputsBox>
        <Button>Register</Button>
      </RegisterForm>
    </ModalWindow>
  );
};

export default RegisterModal;
