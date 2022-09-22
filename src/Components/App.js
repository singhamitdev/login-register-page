import React from "react";
import Login from "./Login";

var isLoggedin = "true";

function App() {
  return (
    <div className="container">{isLoggedin ? <Login /> : <h>Hello</h>} </div>
  );
}

export default App;
