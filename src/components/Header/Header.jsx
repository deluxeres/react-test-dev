import React from "react";
import "./header.scss";
import { Container } from "@chakra-ui/react";

function Header() {
  return (
    <div className="header">
      <Container maxW={1200}>
        <div className="header__menu">
          <div className="header__logo">
            <span>React Test</span>
          </div>
          <div className="header__link">
            <ul>
              <li>
                <a href="/">Главная</a>
              </li>
              <li>
                <a href="/">Форум</a>
              </li>
              <li>
                <a href="/">Тесты</a>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Header;
