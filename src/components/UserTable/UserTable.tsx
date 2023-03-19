import React from "react";
import SortList from "../SortList/SortList";
import UserItem from "../UserItem/UserItem";
import Loader from "../Loader/Loader";
import Pagination from "../Pagination/Pagination";
import { useDispatch } from "react-redux";
import { setCategoryAction, setHideFilterAction } from "../../store/reducers/filterReducer";
import { fetchUsers } from "../../store/action-creators/users";
import { getAllUsersAction, removeUserAction } from "../../store/reducers/userReducer";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { IUser } from "../../types/types";

interface IUserTableProps {
  searchValue: string,
  onChangeSearchValue: (str: string) => void
}

const UserTable: React.FC<IUserTableProps> = ({ searchValue, onChangeSearchValue }) => {
  const dispatch: any = useDispatch()
  const hideFilter = useTypedSelector(state => state.filter.hideFilter)
  const {users, isUsersLoading, userError} = useTypedSelector(state => state.userReducer)

  // eslint-disable-next-line no-unused-vars
  const [limit, setLimit] = React.useState(5);
  const [page, setPage] = React.useState(1);

  /**
   * Функция, отвечающая за смену страницы
   * @param page
   */
  const changePage = (page: number) => {
    setPage(page);
    onChangeSearchValue("");
    dispatch(setHideFilterAction(true))
    dispatch(setCategoryAction(-1))
  };

  /**
   * Функция, отвечающая за удаление пользователя из таблицы
   * @param _user
   */
  const removeUser = (_user: IUser) => {
    dispatch(removeUserAction(_user.id))
  };

  /**
   * Обновление пользователей при нажатии на кнопку 'очистить фильтр'
   */
  React.useEffect(() => {
    if (hideFilter && users.length > 0) {
      const usersId = users.map((user) => {
        return user.id;
      });
      dispatch(getAllUsersAction(usersId))
    }
  }, [hideFilter]);

  /**
   * Получение данных из API при монтировании компонента и при обновлении страницы
   */
  React.useEffect(() => {
    dispatch(fetchUsers(limit,page));
  }, [page]);

  if(userError){
    return (
      <h1 className="error">{userError}</h1>
    )
  }

  return (
    <>
      <div className="sort">
        <span className="sort__title">Сортировка:</span>
        <SortList/>
      </div>
      {isUsersLoading ? (
        <Loader />
      ) : users.length ? (
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
      ) : (
        <h1 className="notification">{`К сожалению, пользователей не осталось :(`}</h1>
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
