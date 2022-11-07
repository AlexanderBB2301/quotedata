import React, { Component } from "react";
import Name from "./Name";
import Quote from "./Quote";
import Image from "./Image";

class Character extends Component {
  state = { liked: false };
  render() {
    const {
      image,
      character: name,
      quote,
      characterDirection,
      liked,
    } = this.props.character;

    if (characterDirection === "Left") {
      return (
        <div className="characterContainer">
          <div className="nameItem">
            <Name name={name} />
          </div>
          <div className="imageItem">
            <Image className="images" image={image} name={name} />
          </div>
          <div className="quoteItem">
            <Quote id="quote" quote={quote} />
          </div>
          <div className="charBtns">
            <button
              className="deleteBtn"
              onClick={() => this.props.onDelete(quote)}
            >
              Delete
            </button>
            <button
              className={liked ? "liked" : "notliked"}
              onClick={() => {
                this.props.onLike(quote);
              }}
            >
              Like
            </button>
          </div>
        </div>
      );
    }
    return (
      <>
        <div className="characterContainer">
          <div className="nameItem">
            <Name name={name} />
          </div>
          <div className="quoteItem">
            <Quote id="quote" quote={quote} />
          </div>
          <div className="imageItem">
            <Image className="images" image={image} name={name} />
          </div>
          <div className="charBtns">
            <button
              className="deleteBtn"
              onClick={() => this.props.onDelete(quote)}
            >
              Delete
            </button>
            <button
              className={liked ? "liked" : "notliked"}
              onClick={() => {
                this.props.onLike(quote);
              }}
            >
              Like
            </button>
          </div>
        </div>
      </>
    );
  }
}

export default Character;
