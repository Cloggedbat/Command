import axios from "axios";
import React, { Component, Fragment } from 'react';
import { Card } from "react-bootstrap";
import { crypAPI } from '../Utils/CryP'

export class SearchForm extends React.
  Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  async handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
    let coinData = await axios.get('https://api.nomics.com/v1/currencies/ticker?key=fffc082c271302b57c140b91af190d16&ids=' + this.state.value + '&interval=1d,30d&convert=EUR&per-page=100&page=1')
    let priceData = await coinData.data[0].price

    console.log(priceData, 'cd')
    return priceData
  }
  // '
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          <input type="text" value={this.state.value} onChange={this.handleChange} />

        </label>
        <div>



        </div>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}



export default SearchForm;