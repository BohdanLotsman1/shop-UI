import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Routes } from "react-router-dom";
import routes from "../libs/constants/routes";

import "./App.css";
import { getRoutes } from "../libs/utils/getRoutes";

export const App = () => {

  return (
    <BrowserRouter>
      <Routes>{getRoutes(routes)}</Routes>
    </BrowserRouter>
  );
};
