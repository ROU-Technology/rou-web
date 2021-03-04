import logo from './logo.svg';
import './App.css';
import Nav from "./components/nav";

function App() {
  return (
    <div className="App">
      <header className="header">
        <Nav></Nav>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
