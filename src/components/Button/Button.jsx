import { ButtonStyled } from "./Button.styled"

// eslint-disable-next-line react/prop-types
const Button = ({children}) => {
  return (
    <ButtonStyled>
          {children}
    </ButtonStyled>
  )
}

export default Button
