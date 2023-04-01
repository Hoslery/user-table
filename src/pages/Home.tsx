import React from "react";
import MainContent from "../components/MainContent/MainContent";

const Home: React.FC = () => {
  return (
    <div className="container">
      <h1 className="title">Список пользователей</h1>
      <MainContent />
    </div>
  );
};

export default Home;
