import React from "react";
import ReactDOM from "react-dom";
import "../css/styles.css";
import "../examples/example-styles.css";
typeof window !== "undefined" && (window.React = React); // for devtools

export default function makeLayout(Layout) {
  class ExampleLayout extends React.Component {
    state = { layout: [] };

    onLayoutChange = layout => {
      this.setState({ layout: layout });
    };

    stringifyLayout() {
      return this.state.layout.map(function(l) {
        return (
          <div className="layoutItem" key={l.i}>
            <b>{l.i}</b>: [{l.x}, {l.y}, {l.w}, {l.h}]
          </div>
        );
      });
    }

    render() {
      return (
        <div>
          <div className="layoutJSON">
            Displayed as <code>[x, y, w, h]</code>:
            <div className="columns">{this.stringifyLayout()}</div>
          </div>
          <Layout onLayoutChange={this.onLayoutChange} />
        </div>
      );
    }
  }

  function run() {
    const contentDiv = document.getElementById("content");
    const gridProps = window.gridProps || {};
    ReactDOM.render(React.createElement(ExampleLayout, gridProps), contentDiv);
  }
  if (!document.getElementById("content")) {
    document.addEventListener("DOMContentLoaded", run);
  } else {
    run();
  }

  return ExampleLayout;
}
