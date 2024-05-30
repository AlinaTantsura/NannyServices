import { useSelector } from "react-redux";
import Button from "../Button/Button"
import { NanniesListContainer, NanniesListStyled } from "../NanniesList/NanniesList.styled"
import NannyCard from "../NannyCard/NannyCard"
import { selectFavoriteList, selectFilter  } from "../../redux-toolkit/filter/selectors";
import { useState } from "react";

const NanniesFavoriteList = () => {
    const favList = useSelector(selectFavoriteList);
    const filterOption = useSelector(selectFilter);
    const [filteredItems] = useState(favList);
    console.log(favList)
    console.log(filterOption)
    // if(filterOption === "A to Z") setFilteredItems(favList.sort((a, b) => a.name.localeCompare(b.name)))
    

    return (
      favList.length > 0 ? (
        <NanniesListContainer>
        <NanniesListStyled>
          {filteredItems.map(nannyData => (
            <li key={nannyData.name}>
              <NannyCard data={nannyData} />
            </li>
          ))}
        </NanniesListStyled>
          {favList.length > 3 && <Button type="button">Load more...</Button>}
        </NanniesListContainer>
      )
        : (
          <p>There are no favorites. Please, choose one from the list</p>
        )

  )
}

export default NanniesFavoriteList