import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Routes } from "react-router-dom";
import routes from "../libs/constants/routes";

import "./App.css";
import { getRoutes } from "../libs/utils/getRoutes";
import { Header } from "../layout/Header/Header";
import { Wrapper } from "../layout/Wrapper";

export const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Wrapper>
        <Routes>{getRoutes(routes)}</Routes>
      </Wrapper>
    </BrowserRouter>
  );
};
