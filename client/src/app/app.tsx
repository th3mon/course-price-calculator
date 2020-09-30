import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { Header } from './common/components/header/header';
import { Welcome } from './pages/welcome';

export const App: React.FunctionComponent = () => (
  <BrowserRouter>
    <div className="app">
      <Header />

      <main className="main">
        <Route exact path="/">
          <Welcome />
        </Route>
      </main>
    </div>
  </BrowserRouter>
);
