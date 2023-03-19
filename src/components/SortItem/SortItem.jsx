import React from 'react'
import { useDispatch } from "react-redux";
import { setHideFilterAction } from '../../store/reducers/filterReducer';

const SortItem = ({item, activeCategory, changeSort}) => {
  const dispatch = useDispatch()

  const clickNumber = React.useRef(1)

  /**
   * Функция, отвечающая за нажатие на сортировку и количество нажатий на нее
   */
  const clickSort = () => {
    dispatch(setHideFilterAction(false))
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