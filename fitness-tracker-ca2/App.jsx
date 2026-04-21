// App.jsx
import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { AppProvider } from "./context/AppContext";
import AppRouter from "./router/AppRouter";
import "./App.css";

function App() {
  return (
    <Router>
      <AppProvider>
        <nav className="navbar">
          <h1>Fitness Tracker</h1>
          <ul>
            <li>
              <Link to="/activities">Activities</Link>
            </li>
            <li>
              <Link to="/filter">Filter</Link>
            </li>
            <li>
              <Link to="/stats">Stats</Link>
            </li>
          </ul>
        </nav>
        <main className="container">
          <AppRouter />
        </main>
      </AppProvider>
    </Router>
  );
}

export default App;
