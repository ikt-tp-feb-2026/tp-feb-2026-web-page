import React from 'react';
import { NavLink } from 'react-router-dom';

function Home() {
  return (
    <main className="App-main">
      <div className="printer-image">
        <img src="./printer.png" alt="DIY Braille Printer" />
      </div>
      <div className="nav-section">
        <p>Начать работу</p>
        <nav><ul>
          <li><NavLink to="/assembly">Сборка</NavLink></li>
          <li><NavLink to="/usage">Использование</NavLink></li>
        </ul></nav>
        
      </div>
    </main>
  );
}

export default Home;
