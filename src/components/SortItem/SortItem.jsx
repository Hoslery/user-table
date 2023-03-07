import React from 'react'

const SortItem = ({item}) => {
  return (
    <li className={`sort__item`}>{item.text}</li>
  )
}

export default SortItem