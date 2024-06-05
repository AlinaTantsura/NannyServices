import { useSelector } from "react-redux"
import GreetingSection from "../components/GreetingSection/GreetingSection"
import MainPictureSection from "../components/MainPictureSection/MainPictureSection"
import { Container } from "./Container.styled"
import { selectIsLogIn } from "../redux-toolkit/user/selectors"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"


const HomePage = () => {
  const isLogIn = useSelector(selectIsLogIn);
  const navigate = useNavigate();
  // if (isLogIn) navigate("/nannies");
  useEffect(() => {
    if (isLogIn) navigate("/nannies");
  }, [isLogIn, navigate])

  return (
    <main>
      <Container>
        <GreetingSection />
        <MainPictureSection />
      </Container>
      </main>
  )
}

export default HomePage