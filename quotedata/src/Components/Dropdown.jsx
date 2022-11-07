import React, { Component } from "react";

class Dropdown extends Component {
  state = {
    options: [
      { id: 0, name: "Select" },
      { id: 1, name: "Sort by Character, Ascending" },
      { id: 2, name: "Sort by Character, Descending" },
      { id: 3, name: "Sort by Quote, Ascending" },
      { id: 4, name: "Sort by Quote, Descensing" },
    ],
  };

  onInput = (event) => {};
  render() {
    return (
      <select onInput={this.props.onInput}>
        {this.state.options.map((option) => (
          <option value={option.id}>{option.name}</option>
        ))}
      </select>
    );
  }
}

export default Dropdown;
