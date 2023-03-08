import React from "react";
import { FilterContext } from "../../context/context";
import { sortItems } from "../../utils/constants";
import { sortByField } from "../../utils/sort/sortByField";
import SortItem from "../SortItem/SortItem";

const SortList = ({ users, setUsers }) => {
  const { activeCategory, onChangeActiveCategory } = React.useContext(FilterContext);

  const changeSort = (id, sortValue, clickNumber) => {
    onChangeActiveCategory(id);
    setUsers(
      [...users].sort((a, b) =>
        clickNumber === 2
          ? sortByField(a, b, sortValue)
          : sortByField(b, a, sortValue)
      )
    );
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
