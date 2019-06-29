import React, { Component } from "react";
import "./App.css";
import Card from "./components/Card";
import animals from "./animals.json";
import Nav from "./components/Nav";

class App extends Component {
  state = {
    animals,
    animalsClicked: [],
    score: 0
  };

  imageClick = event => {
    const currentAnimal = event.target.alt;
    const AnimalAlreadyClicked =
      this.state.animalsClicked.indexOf(currentAnimal) > -1;
    console.log("clicked");

    if (AnimalAlreadyClicked) {
      this.setState({
        animals: this.state.animals.sort(function(a, b) {
          return 0.5 - Math.random();
        }),
        animalsClicked: [],
        score: 0
      });
      alert("You lose");
    } else {
      this.setState(
        {
          animals: this.state.animals.sort(function(a, b) {
            return 0.5 - Math.random();
          }),
          animalsClicked: this.state.animalsClicked.concat(currentAnimal),
          score: this.state.score + 1
        },

        () => {
          if (this.state.score === 12) {
            alert("Yay! You Win!");
            this.setState({
              animals: this.state.animals.sort(function(a, b) {
                return 0.5 - Math.random();
              }),
              animalsClicked: [],
              score: 0
            });
          }
        }
      );
    }
  };

  render() {
    return (
      <div>
        <Nav score={"Score:" + this.state.score} />
        <div className="row">
          <div className="wrapper">
            {this.state.animals.map(animals => (
              <Card
                id={animals.id}
                key={animals.id}
                image={animals.image}
                name={animals.name}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
