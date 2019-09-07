import React from 'react';
import { Wrapper } from './components/Wrapper'
import { Nav } from './components/Nav';
import { Jumbo } from "./components/Jumbo";
import { Main } from './components/Main';
import { Icon } from './components/Icon';
import { Footer } from './components/Footer';
import gameIcons from './gameIcons.json';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      score: 0,
      topScore: 0,
      gameIcons: gameIcons,
      usedIcons: [],
      message: "Click an image to begin!"
    }

    this.randomShuffle = this.randomShuffle.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  randomShuffle(a) {
    let j, x, i;
    for (i = a.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = a[i];
      a[i] = a[j];
      a[j] = x;
    }
    return a;
  }

  handleClick(id) {
    const newState = { ...this.state };

    if (this.state.usedIcons.includes(id)) {
      newState.score = 0;
      newState.usedIcons = [];
      newState.message = "You guessed incorrectly!";
    } else {
      newState.score += 1;
      newState.usedIcons.push(id);
      newState.message = "You guessed correctly!";
      if (newState.score > this.state.topScore) {
        newState.topScore = newState.score;
      }
    }

    this.randomShuffle(gameIcons);
    this.setState(newState);
  }

  render() {
    return (
      <Wrapper>
        <Nav score={this.state.score} topScore={this.state.topScore} message={this.state.message}/>
        <Jumbo />
        <Main>
          {this.state.gameIcons.map(icon => (
            <Icon 
              handleClick={this.handleClick}
              id={icon.id}
              name={icon.name}
              image={icon.image}
            />
          ))}
        </Main>
        <Footer />
      </Wrapper>
    );
  }
}

export default App;
