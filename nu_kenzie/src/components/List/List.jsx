import Card from "../Card/Card";
import styles from "./List.module.css";

const List = ({ listTransactions }) => {
  return (
    <div className={styles["list"]}>
      <div>
        <h2>Resumo financeiro</h2>
        <div>
          <button>Todos</button>
          <button>Entradas</button>
          <button>Despesas</button>
        </div>
      </div>
      <ul>
        {listTransactions.length == 0 ? (
          <li className={styles["nothing"]}>
            Você ainda não possui nenhum lançamento
          </li>
        ) : (
          listTransactions.map((transaction, index) => (
            <Card key={index} transaction={transaction} />
          ))
        )}
      </ul>
    </div>
  );
};

export default List;
