import { ToastContainer } from "react-toastify"
import NanniesFavoriteList from "../components/NanniesFavoriteList/NanniesFavoriteList"
import SelectCategoriesForm from "../components/SelectCategoriesForm/SelectCategoriesForm"
import { MainContainer } from "./Container.styled"

const FavoritesPage = () => {
  return (
    <MainContainer>
      <SelectCategoriesForm />
      <NanniesFavoriteList />
      <ToastContainer />
    </MainContainer>
  )
}

export default FavoritesPage