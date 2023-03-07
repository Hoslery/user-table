import React from "react";
import MainContent from "./components/MainContent/MainContent";
import "./styles/App.css";

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <div className="container">
          <h1 className="title">Список пользователей</h1>
          <MainContent/>
        </div>
      </div>
    </div>
  );
}

export default App;
