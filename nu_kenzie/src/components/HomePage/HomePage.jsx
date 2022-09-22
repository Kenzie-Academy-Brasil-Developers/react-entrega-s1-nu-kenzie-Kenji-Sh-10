import Header from "../Header/Header";
import Form from "../Form/Form";
import List from "../List/List";
import TotalMoney from "../TotalMoney/TotalMoney";
import styles from "./HomePage.module.css";

const HomePage = ({ setIsLoggedIn, listTransactions, setListTransactions }) => {
  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div className={styles["container"]}>
      <Header logout={handleLogout} />
      <div>
        <div>
          <Form
            listTransactions={listTransactions}
            setListTransactions={setListTransactions}
          />
          <TotalMoney listTransactions={listTransactions} />
        </div>
        <List listTransactions={listTransactions} setListTransactions={setListTransactions} />
      </div>
    </div>
  );
};

export default HomePage;
