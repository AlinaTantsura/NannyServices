import sprite from "../images/sprite.svg";
import ReactDOM from "react-dom";
import { BackdropStyled, CloseBtn, ModalStyled } from "./ModalWindow.styled";
import { useEffect } from "react";

// eslint-disable-next-line react/prop-types, no-unused-vars
const ModalWindow = ({ open, children, onClose, width }) => {

    useEffect(() => {
        const handleCloseModalByEsc = (e) => {
            if(e.key === "Escape") onClose(false)
        }
        document.addEventListener("keyup", handleCloseModalByEsc)
        return () => {
            document.removeEventListener("keyup", handleCloseModalByEsc)
        }
    }, [onClose]);

    if (!open) return null

    
    
  return ReactDOM.createPortal(
      <BackdropStyled onClick={onClose}>
          <ModalStyled onClick={(e) => e.stopPropagation()} width={width}>
              <CloseBtn onClick={onClose}>
                <svg width="30" height="30">
                    <use href={sprite + "#icon-x"} />
                </svg>
              </CloseBtn>
              {children}
          </ModalStyled>
      </BackdropStyled>,
      document.getElementById("portal")
  )
}

export default ModalWindow