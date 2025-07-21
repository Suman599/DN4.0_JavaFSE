import React, { Component } from 'react';
import CurrencyConvertor from './CurrencyConvertor';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };

    this.increment = this.increment.bind(this);
    this.sayHello = this.sayHello.bind(this);
    this.handleIncrease = this.handleIncrease.bind(this);
    this.decrement = this.decrement.bind(this);
    this.sayWelcome = this.sayWelcome.bind(this);
    this.handleClick = this.handleClick.bind(this); // For synthetic event
  }

  increment() {
    this.setState(prev => ({ count: prev.count + 1 }));
  }

  decrement() {
    this.setState(prev => ({ count: prev.count - 1 }));
  }

  sayHello() {
    alert("Hello! Static message from sayHello()");
  }

  handleIncrease() {
    this.increment();
    this.sayHello();
  }

  sayWelcome(message) {
    alert(message);
  }

  handleClick(event) {
    alert("I was clicked");
    console.log("Synthetic event: ", event); // Just to demonstrate
  }

  render() {
    return (
      <div>
        <h1>Event Handling in React</h1>
        <p>Counter: {this.state.count}</p>
        <button onClick={this.handleIncrease}>Increase</button>
        <button onClick={this.decrement}>Decrease</button>

        <br /><br />

        <button onClick={() => this.sayWelcome("Welcome!")}>Say Welcome</button>

        <br /><br />

        <button onClick={this.handleClick}>Synthetic OnPress</button>

        <br /><br />

        <CurrencyConvertor />
      </div>
    );
  }
}

export default App;
