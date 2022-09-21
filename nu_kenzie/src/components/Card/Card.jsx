import styles from "./Card.module.css";
import DeleteIcon from "@mui/icons-material/Delete";

const Card = ({ transaction }) => {
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
        <p>{transaction["description"]}</p>
        <span>{transaction["type"]}</span>
      </div>
      <p>R$ {transaction["value"]}</p>
      <button>
        <DeleteIcon />
      </button>
    </li>
  );
};

export default Card;
