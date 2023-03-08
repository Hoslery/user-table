import React from "react";
import SearchContent from "../SearchContent/SearchContent";
import UserTable from "../UserTable/UserTable";
import { FilterContext } from "../../context/context";

const MainContent = () => {
  const [searchValue, setSearchValue] = React.useState("");
  const [hideFilter, setHideFilter] = React.useState(true);
  const [activeCategory, setActiveCategory] = React.useState(-1);

  return (
    <FilterContext.Provider
      value={{
        hideFilter,
        onChangeHideFilter: setHideFilter,
        activeCategory,
        onChangeActiveCategory: setActiveCategory,
      }}
    >
      <SearchContent
        searchValue={searchValue}
        onChangeSearchValue={setSearchValue}
      />
      <UserTable
        searchValue={searchValue}
        onChangeSearchValue={setSearchValue}
      />
    </FilterContext.Provider>
  );
};

export default MainContent;
