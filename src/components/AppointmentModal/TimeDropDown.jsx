import { TimeListStyled, TimeListStyledBox } from "./AppointmentModal.styled"

// eslint-disable-next-line react/prop-types
const TimeDropDown = ({ isOpen, handleTimeCheck }) => {
  return (
    isOpen && (<TimeListStyledBox>
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
            </TimeListStyledBox>)
  )
}

export default TimeDropDown