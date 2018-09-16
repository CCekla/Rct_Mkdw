import React from "react";
import ReactDOM from "react-dom";
import marked from "marked";

import "./styles.css";

class Previewer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text:
        "# Title h1 \n\n ## title h2 \n\n > A blockquote example \n\n * list item 1 \n * list item 2 \n\n\n     This is a code block.\n\n__bold text__\n\n[An example](http://google.com/ 'google') of inline link.\n\n Use the `inlineCodeExample()` function. \n\n![React Logo w/ Text](https://goo.gl/Umyytc)"
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
          <div
            id="preview"
            dangerouslySetInnerHTML={{ __html: marked(this.state.text) }}
          />
        </div>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Previewer />, rootElement);
