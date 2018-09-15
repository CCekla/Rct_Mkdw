import React from "react";
import ReactDOM from "react-dom";
import marked from "marked";

import "./styles.css";

class Previewer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "sample text"
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      text: event.target.value
    });
  }

  render() {
    return (
      <div id="container">
        <form>
          <h4>Markdown</h4>
          <textarea
            id="editor"
            value={this.state.text}
            onChange={this.handleChange}
          />
        </form>
        <div id="right-side">
          <h4>HTML</h4>
          <div id="output">{marked(this.state.text)}</div>
        </div>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Previewer />, rootElement);
