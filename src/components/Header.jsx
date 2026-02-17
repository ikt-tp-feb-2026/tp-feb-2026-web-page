import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="App-header">
      <div className="header-content">
        <h1>DIY Braille Printer</h1>
        <nav>
          <ul>
            <li><NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>Домашняя страница</NavLink></li>
            <li><NavLink to="/assembly" className={({ isActive }) => isActive ? 'active' : ''}>Сборка</NavLink></li>
            <li><NavLink to="/usage" className={({ isActive }) => isActive ? 'active' : ''}>Использование</NavLink></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
