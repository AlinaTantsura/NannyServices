import { useSelector } from "react-redux"
import GreetingSection from "../components/GreetingSection/GreetingSection"
import MainPictureSection from "../components/MainPictureSection/MainPictureSection"
import { Container } from "./Container.styled"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"
import { toast, ToastContainer } from "react-toastify"
import { selectError } from "../redux-toolkit/requestSlice/selectors"


const HomePage = () => {
  const navigate = useNavigate();
  const error = useSelector(selectError);
  useEffect(() => {
    if (error) toast.error(error);
  }, [navigate, error])

  return (
    <main>
      <Container>
        <GreetingSection />
        <MainPictureSection />
      </Container>
      <ToastContainer />
      </main>
  )
}

export default HomePage