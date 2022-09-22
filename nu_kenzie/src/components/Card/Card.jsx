import styles from "./Card.module.css";
import DeleteIcon from "@mui/icons-material/Delete";

const Card = ({ transaction, setListTransactions }) => {
  const deleteTransaction = (id) => {
    setListTransactions((prevListTransactions) => {
      return prevListTransactions.filter(
        (transaction) => id !== transaction["id"]
      );
    });
  };

  const capitalizeFirst = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  return (
    <li
      className={styles["card"]}
      style={
        transaction["type"] === "entrada"
          ? { borderLeft: "solid 8px #03B898" }
          : { borderLeft: "solid 8px #E9ECEF" }
      }
    >
      <div>
        <h3>{transaction["description"]}</h3>
        <span>{capitalizeFirst(transaction["type"])}</span>
      </div>
      <p>
        R${" "}
        {transaction["value"].toLocaleString("pt-BR", {
          minimumFractionDigits: 2,
        })}
      </p>
      <button
        id={transaction["id"]}
        onClick={(e) => deleteTransaction(e.target.id)}
      >
        <DeleteIcon pointerEvents="none" />
      </button>
    </li>
  );
};

export default Card;
