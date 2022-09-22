import { useState } from "react";
import HomePage from "./components/HomePage/HomePage";
import WelcomePage from "./components/WelcomePage/WelcomePage";
import "./App.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [listTransactions, setListTransactions] = useState([]);

  return (
    <div className="App">
      {isLoggedIn ? (
        <HomePage
          setIsLoggedIn={setIsLoggedIn}
          listTransactions={listTransactions}
          setListTransactions={setListTransactions}
        />
      ) : (
        <WelcomePage setIsLoggedIn={setIsLoggedIn} />
      )}
    </div>
  );
}

export default App;
