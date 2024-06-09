import { useEffect, useState } from "react";
import NannyCard from "../NannyCard/NannyCard";
import {
  LoadMoreBtn,
  NanniesListContainer,
  NanniesListStyled,
} from "./NanniesList.styled";
import {
  getLastData,
  getNanniesData,
} from "../../redux-toolkit/fetchNaniesData/operations";
import { useDispatch, useSelector } from "react-redux";
import {
  selectData,
  selectIsLoading,
  selectLastIndex,
} from "../../redux-toolkit/fetchNaniesData/selectors";
import { filterData } from "../../redux-toolkit/filter/filterSlice";
import {
  selectFilter,
  selectFilteredListAll,
} from "../../redux-toolkit/filter/selectors";
import Loader from "../Loader/Loader";

const NanniesList = () => {
  const [limit, setLimit] = useState(3);
  const [isLoadMore, setisLoadMore] = useState(false);
  const data = useSelector(selectData);
  const dispatch = useDispatch();
  const filteredData = useSelector(selectFilteredListAll);
  const filtredOption = useSelector(selectFilter);
  const lastIndex = useSelector(selectLastIndex);
  const isLoad = useSelector(selectIsLoading)
 

  useEffect(() => {
    dispatch(getLastData());
  }, [dispatch]);

  useEffect(() => {
    const fetchData = () => {
      if (!data) {
        dispatch(filterData([]));
        setisLoadMore(false);
      } else dispatch(filterData(data));
    };
    fetchData();
  }, [dispatch, data, filtredOption]);

  useEffect(() => {
    dispatch(getNanniesData(limit));
    if (limit < lastIndex) setisLoadMore(true);
  }, [dispatch, limit, lastIndex]);

  const handleLoadMore = () => {
    if (limit < lastIndex) setLimit(limit + 3);
    else setisLoadMore(false);
    
  };

  // if (!filteredData) setisLoadMore(false);
  // console.log(filteredData)
  if(isLoad) return (<Loader />)
  return (
    filteredData.length > 0 && (
      <NanniesListContainer>
        <NanniesListStyled>
          {filteredData &&
            filteredData?.map((nannyData) => (
              <li key={nannyData.name}>
                <NannyCard data={nannyData} />
              </li>
            ))}
        </NanniesListStyled>
        {isLoadMore && filteredData.length !== 0 && (
          <LoadMoreBtn type="button" onClick={handleLoadMore}>
            Load more...
          </LoadMoreBtn>
        )}
      </NanniesListContainer>
    ) 
  );

  
    
};

export default NanniesList;
