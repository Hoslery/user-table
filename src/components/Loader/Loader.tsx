import React from 'react'
import cl from './Loader.module.css'

const Loader: React.FC = () => {
  return (
    <div className={cl.container}>
      <div className={cl.loading}></div>
    </div>
  )
}

export default Loader