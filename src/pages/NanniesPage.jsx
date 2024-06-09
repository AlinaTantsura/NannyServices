import { toast, ToastContainer } from "react-toastify"
import NanniesList from "../components/NanniesList/NanniesList"
import SelectCategoriesForm from "../components/SelectCategoriesForm/SelectCategoriesForm"
import { MainContainer } from "./Container.styled"
import { useDispatch, useSelector } from "react-redux"
import { selectError } from "../redux-toolkit/user/selectors"
import { useEffect } from "react"

const NanniesPage = () => {
  const error = useSelector(selectError);
  const dispatch = useDispatch();
  useEffect(() => {
    if (error) {
      toast.error(error);
    }
  }, [error, dispatch])

  return (
    <MainContainer>
      <SelectCategoriesForm />
      <NanniesList />
      <ToastContainer />
    </MainContainer>
  )
}

export default NanniesPage