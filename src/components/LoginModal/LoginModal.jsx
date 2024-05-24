/* eslint-disable react/prop-types */
import ModalWindow from "../ModalWindow/ModalWindow"

const LoginModal = ({open, onClose}) => {
    return (
      <ModalWindow open={open} onClose={onClose}>
          <div>LoginModal</div>      
      </ModalWindow>
  )
}

export default LoginModal