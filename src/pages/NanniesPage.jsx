import NannyCard from "../components/NannyCard/NannyCard"
import SelectCategoriesForm from "../components/SelectCategoriesForm/SelectCategoriesForm"
import { MainContainer } from "./Container.styled"

const NanniesPage = () => {

  return (
    <MainContainer>
      <SelectCategoriesForm />
      <NannyCard />
    </MainContainer>
  )
}

export default NanniesPage