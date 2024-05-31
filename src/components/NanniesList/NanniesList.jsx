import { useEffect} from "react";
import NannyCard from "../NannyCard/NannyCard";
import { LoadMoreBtn, NanniesListContainer, NanniesListStyled } from "./NanniesList.styled";
import { getNanniesData } from "../../redux-toolkit/fetchNaniesData/operations";
import { useDispatch, useSelector } from "react-redux";
import { selectData} from "../../redux-toolkit/fetchNaniesData/selectors";
import { filterData } from "../../redux-toolkit/filter/filterSlice";
import { selectFilter, selectFilteredListAll } from "../../redux-toolkit/filter/selectors";

const NanniesList = () => {
  const data = useSelector(selectData);
  const dispatch = useDispatch();
  const filteredData = useSelector(selectFilteredListAll);
  const filtredOption = useSelector(selectFilter)

  useEffect(() => {
    const fetchData = () => {
      if(!data) dispatch(getNanniesData())
      if(data) dispatch(filterData(data))
    }
    fetchData()
  }, [dispatch, data, filtredOption])

  
  return (
    filteredData  && (
      <NanniesListContainer>
        <NanniesListStyled>
          {filteredData  && filteredData ?.map(nannyData => (
            <li key={nannyData.name}>
              <NannyCard data={nannyData} />
            </li>
          )
          )}
        </NanniesListStyled>
        <LoadMoreBtn type="button">Load more...</LoadMoreBtn>
      </NanniesListContainer>)
     
  );
};

export default NanniesList;
