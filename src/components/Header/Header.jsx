import React, {useState} from "react";
import "./header.scss";
import { Container } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function Header() {
  const [show, setShow] = useState(false)
  return (
    <div className="header">
      <Container maxW={1200}>
        <div className="header__menu">
          <div className="header__logo">
            <Link className="headerLogo" to="/">React dev</Link>
          </div>
          <div className="header__link">
            <ul>
              <li>
                <Link to="/">Главная</Link>
              </li>
              <li>
                <Link to="/pizza">Пицца</Link>
              </li>
              <li>
                <Link to="/sushi">Роллы</Link>
              </li>
            </ul>
          </div>
          <div className="header__burger">
            <button onClick={() => setShow(!show)}>
              <svg
                fill="#000000"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 50 50"
                width="30px"
                height="30px"
              >
                <path d="M 0 7.5 L 0 12.5 L 50 12.5 L 50 7.5 Z M 0 22.5 L 0 27.5 L 50 27.5 L 50 22.5 Z M 0 37.5 L 0 42.5 L 50 42.5 L 50 37.5 Z" />
              </svg>
            </button>
          </div>
        </div>
      </Container>
    {show &&       <div className="header__mobile">
        <div className="header-mobile__menu">
          <button onClick={() => setShow(!show)} className="header-mobile__close">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 100 100"
              width="50px"
              height="50px"
            >
              <path
                fill="#f15b6c"
                d="M82 25.275L74.726 18.001 50 42.727 25.276 17.996 18.003 25.268 42.727 50 18 74.727 25.274 82.001 50 57.275 74.722 82.003 81.996 74.732 57.273 50.002z"
              />
              <path
                fill="#1f212b"
                d="M74.722,83.003L74.722,83.003c-0.265,0-0.52-0.105-0.707-0.293L50,58.689l-24.02,24.019c-0.391,0.391-1.023,0.391-1.414,0l-7.274-7.274c-0.391-0.391-0.391-1.023,0-1.414L41.313,50L17.296,25.975c-0.391-0.391-0.391-1.024,0-1.414l7.273-7.271c0.188-0.188,0.442-0.293,0.707-0.293l0,0c0.265,0,0.52,0.105,0.707,0.293L50,41.312l24.019-24.019c0.391-0.391,1.023-0.391,1.414,0l7.274,7.274c0.391,0.391,0.391,1.023,0,1.414l-24.02,24.02l24.016,24.023c0.391,0.391,0.391,1.024,0,1.414l-7.273,7.271C75.242,82.898,74.987,83.003,74.722,83.003z M50,56.275L50,56.275c0.265,0,0.52,0.105,0.707,0.293l24.015,24.021l5.859-5.857L56.566,50.709c-0.391-0.391-0.391-1.023,0-1.414l24.02-24.02l-5.86-5.86L50.707,43.434c-0.188,0.188-0.442,0.293-0.707,0.293l0,0c-0.265,0-0.52-0.105-0.707-0.293L25.276,19.411l-5.859,5.857l24.018,24.024c0.391,0.391,0.391,1.023,0,1.414L19.414,74.727l5.86,5.86l24.02-24.019C49.481,56.38,49.735,56.275,50,56.275z"
              />
              <path
                fill="#1f212b"
                d="M74.5 75c-.128 0-.256-.049-.354-.146l-1-1c-.195-.195-.195-.512 0-.707s.512-.195.707 0l1 1c.195.195.195.512 0 .707C74.756 74.951 74.628 75 74.5 75zM71.5 72c-.128 0-.256-.049-.354-.146l-2-2c-.195-.195-.195-.512 0-.707s.512-.195.707 0l2 2c.195.195.195.512 0 .707C71.756 71.951 71.628 72 71.5 72zM67.5 68c-.128 0-.256-.049-.354-.146l-17.5-17.5c-.195-.195-.195-.512 0-.707l21.5-21.5c.195-.195.512-.195.707 0s.195.512 0 .707L50.707 50l17.146 17.146c.195.195.195.512 0 .707C67.756 67.951 67.628 68 67.5 68zM73.5 27c-.128 0-.256-.049-.354-.146-.195-.195-.195-.512 0-.707l1-1c.195-.195.512-.195.707 0s.195.512 0 .707l-1 1C73.756 26.951 73.628 27 73.5 27zM26.5 27c-.128 0-.256-.049-.354-.146l-1-1c-.195-.195-.195-.512 0-.707s.512-.195.707 0l1 1c.195.195.195.512 0 .707C26.756 26.951 26.628 27 26.5 27zM30.5 31c-.128 0-.256-.049-.354-.146l-2-2c-.195-.195-.195-.512 0-.707s.512-.195.707 0l2 2c.195.195.195.512 0 .707C30.756 30.951 30.628 31 30.5 31z"
              />
              <path
                fill="#1f212b"
                d="M28.5 72c-.128 0-.256-.049-.354-.146-.195-.195-.195-.512 0-.707L49.293 50 32.146 32.854c-.195-.195-.195-.512 0-.707s.512-.195.707 0l17.5 17.5c.195.195.195.512 0 .707l-21.5 21.5C28.756 71.951 28.628 72 28.5 72zM25.5 75c-.128 0-.256-.049-.354-.146-.195-.195-.195-.512 0-.707l1-1c.195-.195.512-.195.707 0s.195.512 0 .707l-1 1C25.756 74.951 25.628 75 25.5 75z"
              />
            </svg>
          </button>
          <div className="header-mobile__link">
            <ul>
              <li>
                <Link to="/">Главная</Link>
              </li>
              <li>
                <Link to="/pizza">Пицца</Link>
              </li>
              <li>
                <Link to="/sushi">Роллы</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>}
    </div>
  );
}

export default Header;



/*   const BurgBtnOpen = document.querySelector(".header__burger");
  const MobileMenu = document.querySelector(".header__mobile");
  const BtnClose = document.querySelector(".header-mobile__close");

  BurgBtnOpen.addEventListener("click", function (e) {
    MobileMenu.style.display = "flex";
  });

  BtnClose.addEventListener("click", function (e) {
    MobileMenu.style.display = "none";
  });

*/
