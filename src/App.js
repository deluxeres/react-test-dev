import "./App.scss";
import React from 'react'
import { Container } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import Index from "./components/pages/FullCard"

import Header from './components/Header/Header'
import Home from "./components/Home";
import PizzaHome from "./components/PizzaHome";

function App() {
  return (
    <div className="App">
        <Header />
        <Container maxW={1200} pt="50">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pizza" element={<PizzaHome />} />
        </Routes>
        </Container>
    </div>
  )
}

export default App;
