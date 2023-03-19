import React from 'react'
import { IUser } from '../../types/types'

interface IModalDeleteProps {
  user: IUser,
  removeUser: (_user: IUser) => void,
  closeModal: () => void
}

const ModalDelete: React.FC<IModalDeleteProps> = ({closeModal, removeUser, user}) => {
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