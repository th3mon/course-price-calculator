import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { Header } from './common/components/header';
import { Welcome } from './pages/welcome';
import { Calculator } from './pages/calculator';

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
            <Calculator />
          </Route>
        </Switch>
      </main>
    </div>
  </BrowserRouter>
);
