import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false
    };
    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogin() {
    this.setState({ isLoggedIn: true });
  }

  handleLogout() {
    this.setState({ isLoggedIn: false });
  }

  render() {
    let page;
    if (this.state.isLoggedIn) {
      // Logged-in user page
      page = (
        <div>
          <h2>Welcome, User!</h2>
          <p>You can now book your flight tickets here.</p>
          <button onClick={this.handleLogout}>Logout</button>
        </div>
      );
    } else {
      // Guest user page
      page = (
        <div>
          <h2>Welcome, Guest!</h2>
          <p>Browse available flights below:</p>
          <ul>
            <li>Flight 101: Delhi to Mumbai</li>
            <li>Flight 202: Kolkata to Bangalore</li>
            <li>Flight 303: Chennai to Pune</li>
          </ul>
          <button onClick={this.handleLogin}>Login</button>
        </div>
      );
    }

    return (
      <div>
        <h1>Ticket Booking App</h1>
        {page}
      </div>
    );
  }
}

export default App;
