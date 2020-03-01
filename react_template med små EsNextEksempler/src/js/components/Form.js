import React, { Component } from "react";
import ReactDOM from "react-dom";

const book = {
  created_at: "Christmas eve",
  id: 12345,
  entities: {
    hashtags: ["Angular"]
  }
};
const hashtags1 = book.entities && book.entities.hashtags;

// Optional Chaining operator
const hashtags2 = book.entities?.hashtags;
console.log("Look at meeee",hashtags2);

class Form extends Component {
  constructor() {
    super();

    this.state = {
      value: ""
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { value } = event.target;
    this.setState(() => {
      return {
        value
      };
    });
  }

  render() {
    return (
      <div>
        <p>Write something</p>
        <form>
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </form>
        <p>These are the hashtags</p>
        <p>The current way ---- {hashtags1}</p>
        <p>New feature --------- {hashtags2}</p>
      </div>
    );
  }
}

export default Form;

const wrapper = document.getElementById("container");
wrapper ? ReactDOM.render(<Form />, wrapper) : false;
