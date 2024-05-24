/* eslint-disable react/prop-types */
import ModalWindow from "../ModalWindow/ModalWindow"

const RegisterModal = ({open, onClose}) => {
    return (
      <ModalWindow open={open} onClose={onClose}>
          <div>RegisterModal</div>      
      </ModalWindow>
  )
}

export default RegisterModal 