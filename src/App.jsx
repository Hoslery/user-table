import "./styles/App.css";
import cancel from "./img/cancel.svg";

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <div className="container">
          <h1 className="title">Список пользователей</h1>
          <div className="search">
            <input
              className="search__input"
              type="search"
              placeholder="Поиск по имени или e-mail"
            />
            <button className="search__btn"></button>
            <button className="search__filter">Очистить фильтр</button>
          </div>
          <div className="sort">
            <span className="sort__title">Сортировка:</span>
            <ul className="sort__list">
              <li className="sort__item sort__item_active">Дата регистрации</li>
              <li className="sort__item">Рейтинг</li>
            </ul>
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
              <div className="user-table__item user">
                <div className="user__name">Username</div>
                <div className="user__email">test@test.ru</div>
                <div className="user__date">23.09.19</div>
                <div className="user__rate">12</div>
                <div className="user__delete">
                  <img src={cancel} alt="" />
                </div>
              </div>
              <div className="user-table__item user">
                <div className="user__name">Username</div>
                <div className="user__email">test@test.ru</div>
                <div className="user__date">23.09.19</div>
                <div className="user__rate">12</div>
                <div className="user__delete">
                  <img src={cancel} alt="" />
                </div>
              </div>
              <div className="user-table__item user">
                <div className="user__name">Username</div>
                <div className="user__email">test@test.ru</div>
                <div className="user__date">23.09.19</div>
                <div className="user__rate">12</div>
                <div className="user__delete">
                  <img src={cancel} alt="" />
                </div>
              </div>
              <div className="user-table__item user">
                <div className="user__name">Username</div>
                <div className="user__email">test@test.ru</div>
                <div className="user__date">23.09.19</div>
                <div className="user__rate">12</div>
                <div className="user__delete">
                  <img src={cancel} alt="" />
                </div>
              </div>
              <div className="user-table__item user">
                <div className="user__name">Username</div>
                <div className="user__email">test@test.ru</div>
                <div className="user__date">23.09.19</div>
                <div className="user__rate">12</div>
                <div className="user__delete">
                  <img src={cancel} alt="" />
                </div>
              </div>
              <div className="user-table__item user">
                <div className="user__name">Username</div>
                <div className="user__email">test@test.ru</div>
                <div className="user__date">23.09.19</div>
                <div className="user__rate">12</div>
                <div className="user__delete">
                  <img src={cancel} alt="" />
                </div>
              </div>
              <div className="user-table__item user">
                <div className="user__name">Username</div>
                <div className="user__email">test@test.ru</div>
                <div className="user__date">23.09.19</div>
                <div className="user__rate">12</div>
                <div className="user__delete">
                  <img src={cancel} alt="" />
                </div>
              </div>
              <div className="user-table__item user">
                <div className="user__name">Username</div>
                <div className="user__email">test@test.ru</div>
                <div className="user__date">23.09.19</div>
                <div className="user__rate">12</div>
                <div className="user__delete">
                  <img src={cancel} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
