import React from 'react';
import logo from './logo.png';
import './header.scss';

export const Header = () => (
  <header className="app-header">
    <img src={logo} className="app-logo" alt="logo" />
  </header>
);
