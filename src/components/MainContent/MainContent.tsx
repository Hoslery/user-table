import React from "react";
import SearchContent from "../SearchContent/SearchContent";
import UserTable from "../UserTable/UserTable";
import {Provider} from 'react-redux'
import {store} from "../../store"

const MainContent: React.FC = () => {
  const [searchValue, setSearchValue] = React.useState("");

  return (
    <Provider store={store}>
      <SearchContent
        searchValue={searchValue}
        onChangeSearchValue={setSearchValue}
      />
      <UserTable
        searchValue={searchValue}
        onChangeSearchValue={setSearchValue}
      />
    </Provider>
  );
};

export default MainContent;
