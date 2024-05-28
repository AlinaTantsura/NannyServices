/* eslint-disable react/prop-types */
import { useForm } from "react-hook-form";
import {
  ErrorMessage,
  FormDescription,
  FormStyled,
  FormTitle,
  InputStyled,
} from "../LoginModal/LoginModal.styled";
import ModalWindow from "../ModalWindow/ModalWindow";
import {
  AddNameText,
  InputAppointmentBox,
  InputWrapBox,
  NameBlock,
  NannyInfoBox,
  PhotoOfNanny,
  TimeListStyled,
  TimeListStyledBox,
} from "./AppointmentModal.styled";
import Button from "../Button/Button";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";

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

const AppointmentModal = ({ open, onClose }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(AppointmentFormValidateSchema) });
  const [isOpenTimeDrop, setIsOpenTimeDrop] = useState(false);
  const [timeValue, setTimeValue] = useState("00:00");

  const handleSubmitForm = (data) => {
    console.log(data);
    reset();
    onClose(true);
  };

  const handleTimeCheck = (e) => {
    if (e.target !== e.currentTarget) {
      setIsOpenTimeDrop(false);
      return setTimeValue(e.target.innerText.replaceAll(" ", ""))
    }
  }
  console.log(errors);
  return (
    <ModalWindow open={open} onClose={onClose}>
      <FormStyled onSubmit={handleSubmit(handleSubmitForm)}>
        <FormTitle>Make an appointment with a babysitter</FormTitle>
        <FormDescription>
          Arranging a meeting with a caregiver for your child is the first step
          to creating a safe and comfortable environment. Fill out the form
          below so we can match you with the perfect care partner.
        </FormDescription>
        <NannyInfoBox>
          <PhotoOfNanny />
          <NameBlock>
            <AddNameText>Your nanny</AddNameText>
            <p>Name</p>
          </NameBlock>
        </NannyInfoBox>
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
              onClick={() => setIsOpenTimeDrop(true)}
              type="text"
              {...register("time")}
              value={timeValue}
            />
            {errors.time && <ErrorMessage>{errors.time?.message}</ErrorMessage>}
            {isOpenTimeDrop && (<TimeListStyledBox>
              <h3>Meeting time</h3>
              <TimeListStyled onClick={handleTimeCheck}>
                <li>00 : 00</li>
                <li>00 : 30</li>
                <li>01 : 00</li>
                <li>01 : 30</li>
                <li>02 : 00</li>
                <li>02 : 30</li>
                <li>03 : 00</li>
                <li>03 : 30</li>
                <li>04 : 00</li>
                <li>04 : 30</li>
                <li>05 : 00</li>
                <li>05 : 30</li>
                <li>06 : 00</li>
                <li>06 : 30</li>
                <li>07 : 00</li>
                <li>07 : 30</li>
                <li>08 : 00</li>
                <li>08 : 30</li>
                <li>09 : 00</li>
                <li>09 : 30</li>
                <li>10 : 00</li>
                <li>10 : 30</li>
                <li>11 : 00</li>
                <li>11 : 30</li>
                <li>12 : 00</li>
                <li>12 : 30</li>
                <li>13 : 00</li>
                <li>13 : 30</li>
                <li>14 : 00</li>
                <li>14 : 30</li>
                <li>15 : 00</li>
                <li>15 : 30</li>
                <li>16 : 00</li>
                <li>16 : 30</li>
                <li>17 : 00</li>
                <li>17 : 30</li>
                <li>18 : 00</li>
                <li>18 : 30</li>
                <li>19 : 00</li>
                <li>19 : 30</li>
                <li>20 : 00</li>
                <li>20 : 30</li>
                <li>21 : 00</li>
                <li>21 : 30</li>
                <li>22 : 00</li>
                <li>22 : 30</li>
                <li>23 : 00</li>
                <li>23 : 30</li>
              </TimeListStyled>
            </TimeListStyledBox>)}
          </InputWrapBox>
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
          <InputStyled
            type="textarea"
            {...register("comment")}
            placeholder="Comment"
          />
          <ErrorMessage>{errors.comment?.message}</ErrorMessage>
        </InputAppointmentBox>
        <Button>Send</Button>
      </FormStyled>
    </ModalWindow>
  );
};

export default AppointmentModal;
