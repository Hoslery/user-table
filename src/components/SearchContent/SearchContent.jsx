import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCategoryAction, setHideFilterAction } from "../../store/reducers/filterReducer";

const SearchContent = ({ searchValue, onChangeSearchValue }) => {
  const dispatch = useDispatch()
  const hideFilter = useSelector(state => state.filter.hideFilter)
  const activeCategory = useSelector(state => state.filter.activeCategory)

  /**
   * Функция, отвечающая за нажатие на кнопку 'Очистить фильтр'
   * @param e - event
   */
  const reset = (e) => {
    e.preventDefault();
    onChangeSearchValue("");
    dispatch(setHideFilterAction(true))
    dispatch(setCategoryAction(-1))
  };

  /**
   * Функция, отвечающая за ввод в поле поиска
   * @param e - event
   */
  const changeSearchInfo = (e) => {
    if (e.target.value) {
      dispatch(setHideFilterAction(false))
    } else if (activeCategory === -1) {
      dispatch(setHideFilterAction(true))
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
