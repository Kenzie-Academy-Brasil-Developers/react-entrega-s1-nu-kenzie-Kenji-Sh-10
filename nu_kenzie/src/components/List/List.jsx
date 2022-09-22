import { useState, useEffect } from "react";
import Card from "../Card/Card";
import styles from "./List.module.css";
import NoCard from "../../assets/NoCard.svg";

const List = ({ listTransactions, setListTransactions }) => {
  const [auxList, setAuxList] = useState(listTransactions);
  const [filter, setFilter] = useState("todos");

  useEffect(() => {
    setAuxList(filteredList(filter));
  }, [listTransactions]);

  const filteredList = (filter) => {
    setFilter(filter);
    return filter === "todos"
      ? listTransactions
      : listTransactions.filter(
          (transaction) => transaction["type"] === filter
        );
  };

  return (
    <div className={styles["list"]}>
      <div className={styles["list_header"]}>
        <h2>Resumo financeiro</h2>
        <div>
          <button
            className={`${styles["button"]} ${
              filter === "todos" ? styles["active"] : ""
            }`}
            value="todos"
            onClick={(e) => setAuxList(filteredList(e.target.value))}
          >
            Todos
          </button>
          <button
            className={`${styles["button"]} ${
              filter === "entrada" ? styles["active"] : ""
            }`}
            value="entrada"
            onClick={(e) => setAuxList(filteredList(e.target.value))}
          >
            Entrada
          </button>
          <button
            className={`${styles["button"]} ${
              filter === "saída" ? styles["active"] : ""
            }`}
            value="saída"
            onClick={(e) => setAuxList(filteredList(e.target.value))}
          >
            Despesas
          </button>
        </div>
      </div>
      <ul>
        {auxList.length === 0 ? (
          <li className={styles["nothing"]}>
            <p>Você ainda não possui nenhum lançamento</p>
            <img src={NoCard} alt="No Card" />
          </li>
        ) : (
          auxList.map((transaction, index) => (
            <Card
              key={index}
              setListTransactions={setListTransactions}
              transaction={transaction}
            />
          ))
        )}
      </ul>
    </div>
  );
};

export default List;
