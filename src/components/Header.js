import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav>
        <Link to="/" className="navitation__a">
          Главная
        </Link>
        <Link to="/actors" className="navitation__a">
          Актёры
        </Link>
      </nav>
    </header>
  );
};

export { Header };
