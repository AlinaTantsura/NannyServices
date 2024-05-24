import { ButtonStyled } from "./Button.styled"

// eslint-disable-next-line react/prop-types
const Button = ({onClick=null, children}) => {
  return (
    <ButtonStyled onClick={onClick}>
          {children}
    </ButtonStyled>
  )
}

export default Button
