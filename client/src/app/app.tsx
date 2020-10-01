import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { Header } from './common/components/header';
import { Welcome } from './pages/welcome';

export const App: React.FunctionComponent = () => (
  <BrowserRouter>
    <div className="app">
      <Header />

      <main className="main">
        <Switch>
          <Route exact path="/">
            <Welcome />
          </Route>
          <Route exact path="/calculator">
            <h2>Kalkulator</h2>
          </Route>
        </Switch>
      </main>
    </div>
  </BrowserRouter>
);
