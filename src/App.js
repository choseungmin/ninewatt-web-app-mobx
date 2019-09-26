import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Counter from './app/superMarket/container/Counter';
import SuperMarket from './app/superMarket/container/SuperMarket';
import SuperMarketContainer from './app/superMarket/SuperMarketContainer'
import Routes from "./routes";
import {Provider} from "mobx-react";
import RootStore from "./app/stores";

const root = new RootStore(); // *** 루트 스토어 생성

export default () => (
  <BrowserRouter>
    <Routes/>
  </BrowserRouter>
)
