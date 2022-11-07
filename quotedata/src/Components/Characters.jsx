import React, { Component } from "react";
import Character from "./Character";

import Dropdown from "./Dropdown";
class Characters extends Component {
  state = {};
  onInput = (event) => {
    this.setState({ Dropdown: Number(event.target.value) });
  };

  render() {
    const { characters, onDelete, onLike } = this.props;

    const copy = [...characters];
    // copy.reverse();

    switch (this.state.Dropdown) {
      case 1:
        copy.sort((a, b) => {
          if (a.character > b.character) return 1;
          if (a.character < b.character) return -1;
          return 0;
        });
        break;
      case 2:
        copy.sort((a, b) => {
          if (a.character < b.character) return 1;
          if (a.character > b.character) return -1;
          return 0;
        });
        break;
      case 3:
        copy.sort((a, b) => {
          if (a.quote > b.quote) return 1;
          if (a.quote < b.quote) return -1;
          return 0;
        });
        break;
      case 4:
        copy.sort((a, b) => {
          if (a.quote < b.quote) return 1;
          if (a.quote > b.quote) return -1;
          return 0;
        });
        break;
      default:
        break;
    }

    return (
      <>
        <Dropdown classname="dropDown" onInput={this.onInput} />
        {copy.map((character, index) => (
          <Character
            character={character}
            onDelete={onDelete}
            onLike={onLike}
            index={index}
          />
        ))}
      </>
    );
  }
}

export default Characters;
