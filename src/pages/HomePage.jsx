import GreetingSection from "../components/GreetingSection/GreetingSection"
import MainPictureSection from "../components/MainPictureSection/MainPictureSection"
import { Container } from "./Container.styled"

const HomePage = () => {
  
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