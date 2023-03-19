import React from "react";
import { sortItems } from "../../utils/constants";
import SortItem from "../SortItem/SortItem";
import { useDispatch, useSelector } from "react-redux";
import { setCategoryAction } from "../../store/reducers/filterReducer";
import { sortUsersAction } from "../../store/reducers/userReducer";

const SortList = () => {
  const dispatch = useDispatch()
  const activeCategory = useSelector(state => state.filter.activeCategory)

  /**
   * Функция, отвечающая за включение/смену сортировки
   * @param id - идентификатор вида сортировки
   * @param sortValue - поле, по которому ведется сортировка
   * @param clickNumber - переменная, отвечающая за направление сортировки
   */
  const changeSort = (id, sortValue, clickNumber) => {
    dispatch(setCategoryAction(id));
    dispatch(sortUsersAction({clickNumber, sortValue}))
  };

  return (
    <ul className="sort__list">
      {sortItems.map((item) => (
        <SortItem
          key={item.id}
          item={item}
          activeCategory={activeCategory}
          changeSort={(clickNumber) =>
            changeSort(item.id, item.sort, clickNumber)
          }
        />
      ))}
    </ul>
  );
};

export default SortList;
