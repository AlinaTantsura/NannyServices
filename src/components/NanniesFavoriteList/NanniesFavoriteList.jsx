import { useDispatch, useSelector } from "react-redux";
import {
  EmptyListText,
  LoadMoreBtn,
  NanniesListContainer,
  NanniesListStyled,
} from "../NanniesList/NanniesList.styled";
import NannyCard from "../NannyCard/NannyCard";
import {
  selectFavoriteList,
  selectFilter,
  selectFilteredListAll,
} from "../../redux-toolkit/filter/selectors";
import { useEffect, useState } from "react";
import { filterData } from "../../redux-toolkit/filter/filterSlice";

const NanniesFavoriteList = () => {
  const favList = useSelector(selectFavoriteList);
  const filtredOption = useSelector(selectFilter);
  const filteredList = useSelector(selectFilteredListAll);
  const [isLoadMore, setisLoadMore] = useState(false);
  const [nextIndex, setNextIndex] = useState(3);
  const dispatch = useDispatch();

  useEffect(() => {
    if (
      !filteredList ||
      filteredList.length < 4 ||
      filteredList.length <= nextIndex
    ) {
      setisLoadMore(false);
    } else {
      setisLoadMore(true);
    }
  }, [filteredList, nextIndex]);

  useEffect(() => {
    if (favList) dispatch(filterData(favList));
  }, [dispatch, favList, filtredOption]);

  const handleLoadMore = () => {
    if (filteredList.length >= nextIndex) {
      setisLoadMore(true);
      setNextIndex(nextIndex + 3);
    }
  };

  return filteredList && filteredList.length > 0 ? (
    <NanniesListContainer>
      <NanniesListStyled>
        {filteredList.slice(0, nextIndex).map((nannyData) => (
          <li key={nannyData.name}>
            <NannyCard data={nannyData} />
          </li>
        ))}
      </NanniesListStyled>
      {isLoadMore && (
        <LoadMoreBtn type="button" onClick={handleLoadMore}>
          Load more...
        </LoadMoreBtn>
      )}
    </NanniesListContainer>
  ) : (
    <EmptyListText>
      There are no favorites. Please, choose one from the list or change filter
      option
    </EmptyListText>
  );
};

export default NanniesFavoriteList;
