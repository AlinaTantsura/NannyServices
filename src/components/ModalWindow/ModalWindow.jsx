import sprite from "../images/sprite.svg";
import ReactDOM from "react-dom";
import { BackdropStyled, ModalStyled } from "./ModalWindow.styled";

// eslint-disable-next-line react/prop-types
const ModalWindow = ({ open, children, onClose }) => {
    if (!open) return null
    
  return ReactDOM.createPortal(
      <BackdropStyled>
          <ModalStyled>
              <button onClick={onClose}>
                  <svg width="30" height="30">
            <use width="20" href={sprite + "#icon-x"} />
          </svg>
              </button>
              {children}
          </ModalStyled>
      </BackdropStyled>,
      document.getElementById("portal")
  )
}

export default ModalWindow