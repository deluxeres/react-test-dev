import "./App.scss";
import React from 'react'
import { Container } from "@chakra-ui/react";

import Header from './components/Header/Header'
import Card from './components/Card/Card'

function App() {
  return (
    <div className="App">
        <Header />
        <Container maxW={1200} pt="50">
          <Card />
        </Container>
    </div>
  )
}

export default App;
