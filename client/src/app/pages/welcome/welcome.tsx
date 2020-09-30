import React from 'react';
import { Link } from 'react-router-dom';

export const Welcome = () => (
  <section className="welcome">
    <header className="welcome__header">
      <h2>Kalkulator ceny kursu</h2>
    </header>

    <div className="welcome__content">
      <p>Tutaj pójdzie przykładowy tekst powitalny.</p>
      <Link to="/calculator">
        <button >Przejdź do kalkulatora</button>
      </Link>
    </div>
  </section>
);
