import React from "react";
import cancel from "../../img/cancel.svg";
import ModalDelete from "../ModalDelete/ModalDelete";

const UserItem = ({user, removeUser}) => {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="user-table__item user">
      <div className="user__name">{user.username}</div>
      <div className="user__email">{user.email}</div>
      <div className="user__date">{user.registration_date}</div>
      <div className="user__rate">{user.rating}</div>
      <div onClick={() => setOpen(true)} className="user__delete">
        <img src={cancel} alt="" />
      </div>
      {open && (
        <ModalDelete
          closeModal={() => setOpen(false)}
          removeUser={removeUser}
          user={user}
        />
      )}
    </div>
  );
};

export default UserItem;
