import React from "react";

const SearchContent = ({ searchValue, onChangeSearchValue }) => {

  const changeSearchInfo = (e) => {
    onChangeSearchValue(e.target.value)
  }

  return (
    <div className="search">
      <input
        value={searchValue}
        onChange={changeSearchInfo}
        className="search__input"
        type="search"
        placeholder="Поиск по имени или e-mail"
      />
      <button className="search__btn"></button>
      <button className="search__filter">Очистить фильтр</button>
    </div>
  );
};

export default SearchContent;
