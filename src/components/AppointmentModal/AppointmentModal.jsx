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
  InpunFullAppoinmentBox,
  InputAppointmentBox,
  NameBlock,
  NannyInfoBox,
  PhotoOfNanny,
} from "./AppointmentModal.styled";
import Button from "../Button/Button";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const AppointmentFormValidateSchema = yup.object().shape({
  address: yup.string().trim().min(3).required("Address is required"),
  phone: yup.string().length(13).required("Phone is required"),
  childAge: yup.number().required("Child's age is required"),
  time: yup.string().required("Time is required"),
  email: yup
    .string()
    .trim()
    .required("Email is required")
    .matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, "Email is not valid"),
  name: yup.string().trim().min(2).required("Name is required"),
  comment: yup.string().trim().min(2).required("Comment is required"),
});

const AppointmentModal = ({ open, onClose }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(AppointmentFormValidateSchema) });

  const handleSubmitForm = (data) => {
    console.log(data);

    reset();
    onClose(true);
  };
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
      
            <InputStyled
              type="text"
              {...register("address")}
              placeholder="Address"
            />
           {errors.address &&  <ErrorMessage>{errors.address?.message}</ErrorMessage>}
         
            <InputStyled
              type="tel"
              {...register("phone")}
              placeholder="Phone"
              defaultValue="+380"
            />
            {errors.phone && <ErrorMessage>{errors.phone?.message}</ErrorMessage>}
       
            <InputStyled
              type="text"
              {...register("childAge")}
              placeholder="Child's age"
            />
            {errors.childAge && <ErrorMessage>{errors.childAge?.message}</ErrorMessage>}
       
            <InputStyled type="time" {...register("time")} />
            {errors.time && <ErrorMessage>{errors.time?.message}</ErrorMessage>}
         
        </InputAppointmentBox>
        <InpunFullAppoinmentBox>
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
        </InpunFullAppoinmentBox>
        <Button>Send</Button>
      </FormStyled>
    </ModalWindow>
  );
};

export default AppointmentModal;
