import { useState } from "react";
import "./App.css";
import Form from "./components/Form/Form";
import Header from "./components/Header/Header";
import HomePage from "./components/HomePage/HomePage";
import List from "./components/List/List";
import TotalMoney from "./components/TotalMoney/TotalMoney";
import WelcomePage from "./components/WelcomePage/WelcomePage";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [listTransactions, setListTransactions] = useState([]);

  return (
    <div className="App">
      {isLoggedIn ? (
        <HomePage>
          <Header setIsLoggedIn={setIsLoggedIn} />
          <div>
            <Form
              listTransactions={listTransactions}
              setListTransactions={setListTransactions}
            />
            <TotalMoney
              totalMoney={listTransactions.reduce(
                (acc, cur) => acc + cur["value"],
                0
              )}
            />
          </div>
          <List
            listTransactions={listTransactions}
          />
        </HomePage>
      ) : (
        <WelcomePage setIsLoggedIn={setIsLoggedIn} />
      )}
    </div>
  );
}

export default App;
