import React, { Component } from "react";
import axios from "axios";
import Characters from "./Components/Characters.jsx";
import "./App.css";
import Dropdown from "./Components/Dropdown.jsx";

class App extends Component {
  state = {};

  async componentDidMount() {
    let { data: characters } = await axios.get(
      `https://thesimpsonsquoteapi.glitch.me/quotes?count=50`
    );

    this.setState({ characters });
  }

  onAdd = () => {
    const indexOf = this.state.characters.findIndex(
      (item) => item.quote === this.state.quote
    );

    if (indexOf > -1) {
      return;
    }
    const copy = { ...this.state };
    copy.characters.unshift({
      character: this.state.character,
      quote: this.state.quote,
      image: "",
      characterDirection: "Left",
    });
    this.setState({ ...copy });
    this.setState({ adding: "" });
    this.setState({ addingChar: "" });
  };

  onDelete = (quote) => {
    const indexOf = this.state.characters.findIndex((item) => {
      return item.quote === quote;
    });

    const copy = { ...this.state };
    copy.characters.splice(indexOf, 1);
    this.setState({ ...copy });
  };

  onLike = (quote) => {
    const characters = [...this.state.characters];

    const indexOf = characters.findIndex((item) => item.quote === quote);
    characters[indexOf].liked = !characters[indexOf].liked;
    this.setState({ characters });
  };

  onInput = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onClear = (event) => {
    event.preventDefault();
    this.setState({ search: " " });
  };

  render() {
    let { characters } = this.state;

    if (!this.state.characters) return <p>Doh! Still loading your quotes!</p>;

    //liked / disliked
    let count = 0;
    this.state.characters.forEach((item) => {
      if (item.liked) {
        count++;
      }
    });

    if (this.state.search) {
      characters = characters.filter((item) => {
        return item.character
          .toLowerCase()
          .includes(this.state.search.toLowerCase().trim());
      });
    }

    return (
      <>
        <div className="quoteAndSearch">
          <div className="searchCharacter" onInput={this.onInput}>
            <h2 id="searchTxt">Wisdom From The Simpsons</h2>
            <input
              id="search"
              type="text"
              name="search"
              placeholder="Search for a Character"
              value={this.state.search}
            />
            <button onClick={this.onClear} id="clearChar">
              Clear Search
            </button>
          </div>
          <h3 className="quoteCount">Quotes liked: {count}</h3>
        </div>
        <div className="addCharacter" onInput={this.onInput}>
          <input
            type="text"
            name="character"
            placeholder="Enter Character Name"
            value={this.state.addingChar}
            id="addingChar"
          />
          <input
            type="text"
            name="quote"
            placeholder="Enter a quote"
            id="adding"
            value={this.state.adding}
          />
          <button className="addBtn" onClick={this.onAdd}>
            Add
          </button>
        </div>

        <Characters
          onInput={this.onInput}
          onDelete={this.onDelete}
          characters={characters}
          onLike={this.onLike}
          onAdd={this.onAdd}
          count={count}
        />
      </>
    );
  }
}
export default App;
