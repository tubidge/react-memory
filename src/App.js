import React, { Component } from "react";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import ScoreCounter from "./components/ScoreCounter";
import CardContainer from "./components/CardContainer";
import Card from "./components/Card";


class App extends Component {
  state = {
    cards: [],
    status: "",
    score: 0
  };

  render() {
    return (
      <Wrapper>
        <Header>React Memory
          <ScoreCounter />
        </Header>
        <CardContainer>
          <Card />
        </CardContainer>
      </Wrapper>
    )
  }
}

export default App;
