import "./App.scss";
import React from 'react'
import { Container } from "@chakra-ui/react";

import Header from './components/Header/Header'
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
        <Header />
        <Container maxW={1200} pt="50">
          <Home />
        </Container>
    </div>
  )
}

export default App;
