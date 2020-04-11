import React from "react";
import ReactDOM from "react-dom";

function MovieItem() {
  return (
    <div>
      <p>Title</p>
    </div>
  );
}

function App() {
  return (
    <div>
      <MovieItem />
    </div>
  );
}
ReactDOM.render(<App />, document.getElementById("root"));
