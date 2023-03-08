import React from "react";
import SearchContent from "../SearchContent/SearchContent";
import UserTable from "../UserTable/UserTable";

const MainContent = () => {
  const [searchValue, setSearchValue] = React.useState("");

  return (
    <>
      <SearchContent
        searchValue={searchValue}
        onChangeSearchValue={setSearchValue}
      />
      <UserTable
        searchValue={searchValue}
        onChangeSearchValue={setSearchValue}
      />
    </>
  );
};

export default MainContent;
