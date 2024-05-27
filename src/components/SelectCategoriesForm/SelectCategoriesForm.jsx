import {
  FilterLabel,
  SelectButtonStyled,
  OptionsList,
  Option,
  SelectStyled,
} from "./SelectCategoriesForm.styled";
import sprite from "../images/sprite.svg";
import { useState } from "react";

const SelectCategoriesForm = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [checkedOption, setCheckedOption] = useState("A to Z");

  const handleOpenSelect = () => {
    if (isOpen) return setIsOpen(false);
    return setIsOpen(true);
  };

  const handleCheckedOption = (e) => {
    setCheckedOption(e.target.innerText);
    setIsOpen(false);
  };

  return (
    <>
      <SelectStyled>
        <FilterLabel htmlFor="select">Filters</FilterLabel>
        <SelectButtonStyled type="button" onClick={handleOpenSelect}>
          {checkedOption}
          <svg width="20" height="20">
            <use width={12} href={sprite + "#icon-Vector"} />
          </svg>
        </SelectButtonStyled>
        {isOpen && (
          <OptionsList>
            <Option
              className={checkedOption === "A to Z" ? "checked" : ""}
              onClick={handleCheckedOption}
            >
              A to Z
            </Option>
            <Option
              className={checkedOption === "Z to A" ? "checked" : ""}
              onClick={handleCheckedOption}
            >
              Z to A
            </Option>
            <Option
              className={checkedOption === "Less than 10$" ? "checked" : ""}
              onClick={handleCheckedOption}
            >
              Less than 10$
            </Option>
            <Option
              className={checkedOption === "Greater than 10$" ? "checked" : ""}
              onClick={handleCheckedOption}
            >
              Greater than 10$
            </Option>
            <Option
              className={checkedOption === "Popular" ? "checked" : ""}
              onClick={handleCheckedOption}
            >
              Popular
            </Option>
            <Option
              className={checkedOption === "Not popular" ? "checked" : ""}
              onClick={handleCheckedOption}
            >
              Not popular
            </Option>
            <Option
              className={checkedOption === "Show all" ? "checked" : ""}
              onClick={handleCheckedOption}
            >
              Show all
            </Option>
          </OptionsList>
        )}
      </SelectStyled>
    </>
  );
};

export default SelectCategoriesForm;
