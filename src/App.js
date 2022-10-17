
import './App.css';
import Dictionary from "./Dictionary";
import Github from "./Github";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Dictionary </h1>
  
        <Dictionary defaultKeyword="sunset" />
      </header>
      <Github />{" "}
    </div>
  );
}

export default App;
