import React from "react";
import { useDispatch} from "react-redux";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { setCategoryAction, setHideFilterAction } from "../../store/reducers/filterReducer";

interface ISearchContentProps {
  searchValue: string,
  onChangeSearchValue: (str: string) => void
}

const SearchContent: React.FC<ISearchContentProps> = ({ searchValue, onChangeSearchValue }) => {
  const dispatch = useDispatch()
  const hideFilter = useTypedSelector(state => state.filter.hideFilter)
  const activeCategory = useTypedSelector(state => state.filter.activeCategory)

  /**
   * Функция, отвечающая за нажатие на кнопку 'Очистить фильтр'
   * @param e - event
   */
  const reset = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    onChangeSearchValue("");
    dispatch(setHideFilterAction(true))
    dispatch(setCategoryAction(-1))
  };

  /**
   * Функция, отвечающая за ввод в поле поиска
   * @param e - event
   */
  const changeSearchInfo = (e: React.ChangeEvent<HTMLInputElement>) => {
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
