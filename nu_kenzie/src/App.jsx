import { useState } from "react";
import "./App.css";
import HomePage from "./components/HomePage/HomePage";
import WelcomePage from "./components/WelcomePage/WelcomePage";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="App">
      {isLoggedIn ? (
        <HomePage setIsLoggedIn={setIsLoggedIn} />
      ) : (
        <WelcomePage setIsLoggedIn={setIsLoggedIn} />
      )}
    </div>
  );
}

export default App;
