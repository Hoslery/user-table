import React from "react";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import AppRouter from "./router/AppRouter";
import "./styles/App.css";

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <Header/>
        <AppRouter/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
