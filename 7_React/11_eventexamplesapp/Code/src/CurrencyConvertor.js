import React, { Component } from 'react';
class CurrencyConvertor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rupees: '',
      euro: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ rupees: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const euro = (this.state.rupees / 90).toFixed(2); // Assuming 1 Euro = ₹90
    this.setState({ euro: euro });
  }

  render() {
    return (
      <div>
        <h2>Currency Convertor</h2>
        <form onSubmit={this.handleSubmit}>
          <label>
            Amount in ₹:
            <input
              type="number"
              value={this.state.rupees}
              onChange={this.handleChange}
            />
          </label>
          <button type="submit">Convert</button>
        </form>

        {this.state.euro && (
          <p>Converted Amount in Euro: €{this.state.euro}</p>
        )}
      </div>
    );
  }
}

export default CurrencyConvertor;
