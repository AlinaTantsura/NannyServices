import NanniesList from "../components/NanniesList/NanniesList"
import SelectCategoriesForm from "../components/SelectCategoriesForm/SelectCategoriesForm"
import { MainContainer } from "./Container.styled"

const FavoritesPage = () => {
  return (
    <MainContainer>
      <SelectCategoriesForm />
      <NanniesList />
    </MainContainer>
  )
}

export default FavoritesPage