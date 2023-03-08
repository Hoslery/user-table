import React from "react";
import SortList from "../SortList/SortList";
import { useFetching } from "../../hooks/useFetching";
import UserItem from "../UserItem/UserItem";
import Api from "../../API/Api";
import Loader from "../Loader/Loader";
import Pagination from "../Pagination/Pagination";
import { formatDate } from "../../utils/date/formatDate";

const UserTable = ({ searchValue, onChangeSearchValue }) => {
  const [users, setUsers] = React.useState([]);
  const [limit, setLimit] = React.useState(5);
  const [page, setPage] = React.useState(1);

  const [fetchUsers, isUsersLoading, userError] = useFetching(async () => {
    const response = await Api.getAllUsers(limit, page);
    setUsers(formatDate(response.data));
  });

  const changePage = (page) => {
    setPage(page);
    onChangeSearchValue("")
  };

  const removeUser = (_user) => {
    setUsers(users.filter((user) => user.id !== _user.id));
  };

  React.useEffect(() => {
    fetchUsers();
  }, [page]);

  return (
    <>
      <div className="sort">
        <span className="sort__title">Сортировка:</span>
        <SortList />
      </div>
      {userError && (
        <h1 className="error">{`Извините, произошла ошибка :(`}</h1>
      )}
      {isUsersLoading ? (
        <Loader />
      ) : (
        <div className="user-table">
          <div className="user-table__header header">
            <div className="header__name">Имя пользователя</div>
            <div className="header__email">E-mail</div>
            <div className="header__date">Дата регистрации</div>
            <div className="header__rate">Рейтинг</div>
            <div className="header__delete"></div>
          </div>
          <div className="user-table__content">
            {users
              .filter((user) => {
                return (
                  user.username
                    .toLowerCase()
                    .includes(searchValue.toLowerCase()) ||
                  user.email.toLowerCase().includes(searchValue.toLowerCase())
                );
              })
              .map((user) => (
                <UserItem key={user.id} user={user} removeUser={removeUser} />
              ))}
          </div>
        </div>
      )}
      <Pagination
        changePage={changePage}
        totalPages={[1, 2, 3, 4, 5]}
        page={page}
      />
    </>
  );
};

export default UserTable;
