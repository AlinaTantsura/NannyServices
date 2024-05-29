import styled from "styled-components";

export const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
`;

export const InputsBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  margin-bottom: 40px;
`;

export const InputStyled = styled.input`
  border-radius: 12px;
  width: 100%;
  border: 1px solid rgba(17, 16, 28, 0.1);
  outline: none;
  padding: 16px 18px;
  font-family: var(--font-family-400);
  line-height: 125%;
  color: var(--main-black);
  &::placeholder {
    font-family: var(--font-family-400);
    line-height: 125%;
    color: var(--main-black);
  }
`;

export const PassInputBox = styled.div`
  position: relative;
`;

export const IconEye = styled.svg`
  position: absolute;
  right: 18px;
  top: 50%;
  transform: translateY(-50%);
`;
export const FormTitle = styled.h2`
  font-size: 40px;
  line-height: 120%;
  letter-spacing: -0.02em;
  margin-bottom: 20px;
`;

export const FormDescription = styled.h2`
  font-family: var(--font-family-400);
  line-height: 125%;
  color: rgba(17, 16, 28, 0.5);
  margin-bottom: 40px;
`;

export const ErrorMessage = styled.p`
  color: red;
  font-size: 10px;
  margin-top: -15px;
`;
