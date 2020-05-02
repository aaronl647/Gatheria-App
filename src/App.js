import React, { Component } from "react";
import "./App.css";
import MainPage from "./components/MainPage/MainPage";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">Gatheria</header>
        <MainPage />
        <footer className="component">Gatheria © </footer>
        </div>
    );
  }
}

export default App;



// <div className="App">
//         <header className="App-header">Gatheria</header>
//         <div className="navigation">
//           <div className="nav">
//             <h4>Hello</h4>
//           </div>
//           <div className="nav">
//             <h4>Hello Again</h4>
//           </div>
//         </div>
//         <footer className="component">Gatheria © </footer>
//       </div>