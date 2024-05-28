import Button from "../Button/Button";
import NannyCard from "../NannyCard/NannyCard";
import { NanniesListContainer, NanniesListStyled } from "./NanniesList.styled";

const NanniesList = () => {
  return (
    <NanniesListContainer>
      <NanniesListStyled>
        <li>
          <NannyCard />
        </li>
        <li>
          <NannyCard />
        </li>
        <li>
          <NannyCard />
        </li>
      </NanniesListStyled>
      <Button type="button">Load more...</Button>
    </NanniesListContainer>
  );
};

export default NanniesList;
