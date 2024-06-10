/* eslint-disable react/prop-types */
import { useForm } from "react-hook-form";
import {
  ErrorMessage,
  FormDescription,
  FormStyled,
  FormTitle,
  InputsBox,
  InputStyled,
} from "../LoginModal/LoginModal.styled";
import {
  AddNameText,
  IconClock,
  InputAppointmentBox,
  InputWrapBox,
  NameBlock,
  NannyInfoBox,
  PhotoOfNanny,
  TextAreaStyled,
} from "./AppointmentModal.styled";
import Button from "../Button/Button";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import ModalWindow from "../ModalWindow/ModalWindow";
import sprite from "../images/sprite.svg";
import TimeDropDown from "./TimeDropDown";
import { toast } from "react-toastify";

const AppointmentFormValidateSchema = yup.object().shape({
  address: yup
    .string()
    .trim()
    .min(3, "Address must have at least 3 characters")
    .required("Address is required"),
  phone: yup
    .string()
    .length(13, "Phone number must be exactly 13 characters")
    .required("Phone is required"),
  childAge: yup
    .number("Child's age must be a number")
    .required("Child's age is required")
    .max(18, "Child's age must be less than 18"),
  time: yup.string().required("Time is required"),
  email: yup
    .string()
    .trim()
    .required("Email is required")
    .matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, "Email is not valid"),
  name: yup
    .string()
    .trim()
    .required("Name is required")
    .min(2, "Name must have at least 2 characters"),
  comment: yup
    .string()
    .trim()
    .required("Comment is required")
    .min(2, "Comment must have at least 2 characters"),
});

const date = new Date();

const timeNow = `${
  date.getHours() < 10 ? `0${date.getHours()}` : date.getHours()
}:${date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes()}`;

const AppointmentModal = ({ imgURL, name, open, onClose }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(AppointmentFormValidateSchema) });
  const [isOpenTimeDrop, setIsOpenTimeDrop] = useState(false);
  const [timeValue, setTimeValue] = useState(timeNow);

  const handleTimeCheck = (e) => {
    if (e.target !== e.currentTarget) {
      // setIsOpenTimeDrop(false);
      setTimeValue(e.target.innerText.replaceAll(" ", ""));
      return;
    }
  };

  const handleSubmitForm = (data) => {
    toast.info(
      `Hello, ${data.name}. You appointment on ${data.time} was succesfully created`
    );
    console.log('Appointment data:', data);
    reset();
    onClose(true);
  };

  return (
    <ModalWindow open={open} onClose={onClose} width={"600px"}>
      <FormStyled onSubmit={handleSubmit(handleSubmitForm)}>
        <FormTitle>Make an appointment with a babysitter</FormTitle>
        <FormDescription>
          Arranging a meeting with a caregiver for your child is the first step
          to creating a safe and comfortable environment. Fill out the form
          below so we can match you with the perfect care partner.
        </FormDescription>
        <NannyInfoBox>
          <PhotoOfNanny src={imgURL} alt="Photo of nanny" />
          <NameBlock>
            <AddNameText>Your nanny</AddNameText>
            <p>{name}</p>
          </NameBlock>
        </NannyInfoBox>
        <InputsBox>
          <InputAppointmentBox>
            <InputWrapBox>
              <InputStyled
                type="text"
                {...register("address")}
                placeholder="Address"
              />
              {errors.address && (
                <ErrorMessage>{errors.address?.message}</ErrorMessage>
              )}
            </InputWrapBox>
            <InputWrapBox>
              <InputStyled
                type="tel"
                {...register("phone")}
                placeholder="Phone"
                defaultValue="+380"
              />
              {errors.phone && (
                <ErrorMessage>{errors.phone?.message}</ErrorMessage>
              )}
            </InputWrapBox>
            <InputWrapBox>
              <InputStyled
                type="text"
                {...register("childAge")}
                placeholder="Child's age"
              />
              {errors.childAge && (
                <ErrorMessage>{errors.childAge?.message}</ErrorMessage>
              )}
            </InputWrapBox>
            <InputWrapBox>
              <InputStyled
                onClick={() => setIsOpenTimeDrop(!isOpenTimeDrop)}
                type="text"
                {...register("time")}
                value={timeValue}
              />
              <IconClock width={20} height={20}>
                <use href={sprite + "#icon-clock"} />
              </IconClock>
              {errors.time && (
                <ErrorMessage>{errors.time?.message}</ErrorMessage>
              )}
              <TimeDropDown
                isOpen={isOpenTimeDrop}
                handleTimeCheck={handleTimeCheck}
              />
            </InputWrapBox>
          </InputAppointmentBox>
          <InputStyled
            type="email"
            {...register("email")}
            placeholder="Email"
          />
          <ErrorMessage>{errors.email?.message}</ErrorMessage>
          <InputStyled
            type="text"
            {...register("name")}
            placeholder="Father's or mother's name"
          />
          <ErrorMessage>{errors.name?.message}</ErrorMessage>
          <TextAreaStyled
            type="textarea"
            rows="3"
            {...register("comment")}
            placeholder="Comment"
          />
          <ErrorMessage>{errors.comment?.message}</ErrorMessage>
        </InputsBox>
        <Button>Send</Button>
      </FormStyled>
    </ModalWindow>
  );
};

export default AppointmentModal;
