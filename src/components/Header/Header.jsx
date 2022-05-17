import React from "react";
import "./header.scss";
import { Container } from "@chakra-ui/react";

function Header() {
  return (
    <div className="header">
      <Container maxW={1200}>
        <div className="header__menu">
          <div className="header__logo">
            <span>React dev</span>
          </div>
          <div className="header__link">
            <ul>
              <li>
                <a href="/">Главная</a>
              </li>
              <li>
                <a href="/">Пицца</a>
              </li>
              <li>
                <a href="/">Роллы</a>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Header;
