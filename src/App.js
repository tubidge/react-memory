import React, { Component } from "react";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import ScoreCounter from "./components/ScoreCounter";
import CardContainer from "./components/CardContainer";
import Card from "./components/Card";
import animals from "./animals.json";


class App extends Component {
  state = {
    animals
    // cards: [],
    // status: "",
    // score: 0
  };

  render() {
    return (
      // <Wrapper>
      //   <Header>
      //     React Memory
      //     <ScoreCounter />
      //   </Header>
      //   <CardContainer>
      //     <Card />
      //   </CardContainer>
      // </Wrapper>
      <Wrapper>
        <Header>
          <ScoreCounter />
        </Header>
        <CardContainer>
          {this.state.animals.map(animal => (
            <Card
              id={animal.id}
              key={animal.id}
              name={animal.name}
              image={animal.image}
            />
          ))}
        </CardContainer>
      </Wrapper>
    )
  }
}

console.log(animals);

export default App;
