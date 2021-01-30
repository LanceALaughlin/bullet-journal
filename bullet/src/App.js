import "./App.css";
import DayContainer from "./modules/day/components/DayContainer";

function App() {
  return (
    <div className="App">
      <header className="App-header">Bullet Journal</header>
      <div className="bullet-container">
        <DayContainer />
      </div>
    </div>
  );
}

export default App;
