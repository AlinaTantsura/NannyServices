import { useEffect} from "react";
import Button from "../Button/Button";
import NannyCard from "../NannyCard/NannyCard";
import { NanniesListContainer, NanniesListStyled } from "./NanniesList.styled";
import { getNanniesData } from "../../redux-toolkit/fetchNaniesData/operations";
import { useDispatch, useSelector } from "react-redux";
import { selectData} from "../../redux-toolkit/fetchNaniesData/selectors";

const NanniesList = () => {
  const data = useSelector(selectData);
  const dispatch = useDispatch();
  

  useEffect(() => {
    const fetchData = () => {
        dispatch(getNanniesData())
    }
    fetchData()
  }, [dispatch])

  return (
    data && (
      <NanniesListContainer>
        <NanniesListStyled>
          {data && data?.map(nannyData => (
            <li key={nannyData.name}>
              <NannyCard data={nannyData} />
            </li>
          )
          )}
        </NanniesListStyled>
        <Button type="button">Load more...</Button>
      </NanniesListContainer>)
     
  );
};

export default NanniesList;
