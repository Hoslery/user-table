import React from 'react'

const ModalDelete = ({closeModal, removeUser, user}) => {
  return (
    <div className="overlay">
      <div className="modal">
        <div className="modal__title">
          Вы уверены, что хотите удалить пользователя?
        </div>
        <div className="modal__btns">
          <button onClick={() => removeUser(user)} className='modal__btn modal__btn_yes'>Да</button>
          <button onClick={closeModal} className='modal__btn modal__btn_no'>Нет</button>
        </div>
      </div>
    </div>
  )
}

export default ModalDelete