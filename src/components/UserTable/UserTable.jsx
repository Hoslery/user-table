import React from "react";
import SortList from "../SortList/SortList";
import { users } from "../../utils/constants";
import UserItem from "../UserItem/UserItem";

const UserTable = () => {
  return (
    <>
      <div className="sort">
        <span className="sort__title">Сортировка:</span>
        <SortList/>
      </div>
      <div className="user-table">
        <div className="user-table__header header">
          <div className="header__name">Имя пользователя</div>
          <div className="header__email">E-mail</div>
          <div className="header__date">Дата регистрации</div>
          <div className="header__rate">Рейтинг</div>
          <div className="header__delete"></div>
        </div>
        <div className="user-table__content">
          {users.map((user) => (
            <UserItem key={user.id} user={user}/>
          ))}
        </div>
      </div>
    </>
  );
};

export default UserTable;
