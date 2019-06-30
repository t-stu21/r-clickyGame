import React, { Component } from "react";
import "./App.css";
import Card from "./components/Card";
import animals from "./animals.json";
import Jumbo from "./components/Jumbo";

class App extends Component {
  state = {
    animals,
    animalsClicked: [],
    score: 0
  };

  imageClick = id => {
    let animalsClicked = this.state.animalsClicked;

    if (animalsClicked.includes(id)) {
      this.setState({
        animalsClicked: [],
        score: 0,
        status: "Game Over!"
      });
      console.log(animalsClicked);
      return;
    } else {
      animalsClicked.push(id);
      this.setState({
        score: animalsClicked.length
      });

      if (animalsClicked.length === 12) {
        this.setState({
          score: 12,
          status: "You Won!",
          animalsClicked: []
        });
        console.log("You Win");
        return;
      }

      this.setState({
        animals,
        animalsClicked,
        score: animalsClicked.length
      });

      for (let i = animals.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [animals[i], animals[j]] = [animals[j], animals[i]];
      }
    }
  };

  render() {
    return (
      <div>
        <Jumbo score={"Score:" + this.state.score} />
        <div className="row">
          <div className="wrapper">
            {this.state.animals.map(animals => (
              <Card
                id={animals.id}
                key={animals.id}
                image={animals.image}
                name={animals.name}
                imageClick={this.imageClick}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
