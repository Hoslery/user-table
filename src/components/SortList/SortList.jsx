import React from "react";
import { sortItems } from "../../utils/constants";
import SortItem from "../SortItem/SortItem";

const SortList = () => {
  return (
    <ul className="sort__list">
      {sortItems.map((item) => (
        <SortItem key={item.id} item={item} />
      ))}
    </ul>
  );
};

export default SortList;
