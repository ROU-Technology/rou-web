// import logo from "./logo.svg";
import "./App.css";
import Nav from "./components/nav/nav.jsx";
import Footer from "./components/footer/Footer.jsx";

function App() {
  return (
    <div className="App ">
      <header className="header">
        <Nav></Nav>
      </header>
      <div className="body">
        <p className="para">
          Please we currently updating our system we will be back shortly
        </p>
      </div>
      <Footer />
    </div>
  );
}

export default App;
