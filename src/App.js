import React, { Component } from "react";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import Status from "./components/Status";
import ScoreCounter from "./components/ScoreCounter";
import Jumbotron from "./components/Jumbotron";
import CardContainer from "./components/CardContainer";
import Card from "./components/Card";
import animals from "./animals.json";


class App extends Component {
  state = {
    animals,
    score: 0,
    topScore: 0,
    status: "Click an image to start",
    guesses: []
  };

  userGuess = (id) => {
    if (this.state.guesses.includes(id)) {
      this.setState({
        status: "Wrong! Game over.",
        score: 0,
        guesses: []
      })
    } else {
      const currentGuess = this.state.guesses;
      currentGuess.push(id);
      const newScore = this.state.score + 1;
      if (newScore > this.state.topScore) {
        this.setState({
          guesses: currentGuess,
          score: newScore,
          topScore: newScore,
          status: "Correct! Guess again."
        })
      } else {
        this.setState({
          guesses: currentGuess,
          score: newScore,
          status: "Correct! Guess again."
        });
      };
    };
    this.shuffle();
  };

  shuffle = () => {
    this.state.animals.sort(() => Math.random() - 0.5)
  };

  render() {
    return (
      <Wrapper>
        <Header>
          <ScoreCounter
            score={this.state.score}
            topScore={this.state.topScore}
          />
        </Header>
        <Jumbotron />
        <div className="container">
          <div className="row">
            <div className="col col-sm-2"></div>
            <div className="col">
              <Status
                status={this.state.status}
              />
            </div>
            <div className="col col-sm-2"></div>
          </div>
          <div className="row">
            <div className="col col-sm-2"></div>
            <div className="col">
              <CardContainer>
                {this.state.animals.map(animal => (
                  <Card
                    id={animal.id}
                    key={animal.id}
                    alt={animal.name}
                    image={animal.image}
                    userGuess={this.userGuess}
                  />
                ))}
              </CardContainer>
            </div>
            <div className="col col-sm-2"></div>
          </div>
        </div>
      </Wrapper>
    )
  }
}

console.log(animals);

export default App;
