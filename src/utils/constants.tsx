import { INavItem, IRoute, ISort } from "../types/types";
import React from "react";
import Home from "../pages/Home";
import AboutMe from "../pages/AboutMe";
import { Navigate } from "react-router-dom";


export const sortItems: ISort[] = [
  {id: 1, text: 'Дата регистрации', sort: 'registration_date'},
  {id: 2, text: 'Рейтинг', sort: 'rating'}
]

export const routes: IRoute[] = [
  {path: "/home", element: <Home/>},
  {path: "/about", element: <AboutMe/>},
  {path: "/*", element: <Navigate to="/home" replace />},
]

export const navItems: INavItem[] = [
  {id: 1, text: 'Home', path: '/home'},
  {id: 2, text: 'About Me', path: '/about'}
]