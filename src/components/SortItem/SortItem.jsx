import React from 'react'
import { FilterContext } from '../../context/context';

const SortItem = ({item, activeCategory, changeSort}) => {
  const { onChangeHideFilter } = React.useContext(FilterContext);

  const clickNumber = React.useRef(1)

  const clickSort = () => {
    onChangeHideFilter(false)
    if (activeCategory !== item.id) {
      clickNumber.current = 1
    }
    changeSort(clickNumber.current)
    if (clickNumber.current === 1){
      clickNumber.current = 2
    } else {
      clickNumber.current = 1
    }
  }

  return (
    <li onClick={clickSort} className={`sort__item ${activeCategory === item.id ? 'sort__item_active' : ''}`}>{item.text}</li>
  )
}

export default SortItem