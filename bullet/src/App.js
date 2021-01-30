import "./App.css";
import { PostContextProvider } from "./modules/common/context/post-context";
// import MonthContainer from "./modules/month/components/MonthContainer";
import DayContainer from "./modules/day/components/DayContainer";

function App() {
  return (
    <div className="App">
      <header className="App-header">Bullet Journal</header>
      <div className="bullet-container">
        <PostContextProvider>
          <DayContainer />
        </PostContextProvider>
      </div>
    </div>
  );
}

export default App;
