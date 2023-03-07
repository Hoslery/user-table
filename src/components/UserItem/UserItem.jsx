import React from "react";
import cancel from "../../img/cancel.svg";

const UserItem = ({user}) => {
  return (
    <div className="user-table__item user">
      <div className="user__name">{user.username}</div>
      <div className="user__email">{user.email}</div>
      <div className="user__date">{user.registration_date}</div>
      <div className="user__rate">{user.rating}</div>
      <div className="user__delete">
        <img src={cancel} alt="" />
      </div>
    </div>
  );
};

export default UserItem;
