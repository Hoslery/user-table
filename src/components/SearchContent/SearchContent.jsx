import React from "react";
import { FilterContext } from "../../context/context";

const SearchContent = ({ searchValue, onChangeSearchValue }) => {
  const {
    hideFilter,
    onChangeHideFilter,
    activeCategory,
    onChangeActiveCategory,
  } = React.useContext(FilterContext);

  /**
   * Функция, отвечающая за нажатие на кнопку 'Очистить фильтр'
   * @param e - event
   */
  const reset = (e) => {
    e.preventDefault();
    onChangeSearchValue("");
    onChangeHideFilter(true);
    onChangeActiveCategory(-1);
  };

  /**
   * Функция, отвечающая за ввод в поле поиска
   * @param e - event
   */
  const changeSearchInfo = (e) => {
    if (e.target.value) {
      onChangeHideFilter(false);
    } else if (activeCategory === -1) {
      onChangeHideFilter(true);
    }
    onChangeSearchValue(e.target.value);
  };

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
      <button
        onClick={reset}
        className={`search__filter ${
          hideFilter ? `search__filter_hidden` : ``
        }`}
      >
        Очистить фильтр
      </button>
    </div>
  );
};

export default SearchContent;
