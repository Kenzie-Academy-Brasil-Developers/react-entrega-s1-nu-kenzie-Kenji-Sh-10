import styles from "./TotalMoney.module.css";

const TotalMoney = ({ listTransactions }) => {
  return (
    <div className={styles["total_money"]}>
      <div>
        <p>Valor total: </p>
        <span>
          R${" "}
          {listTransactions
            .reduce((acc, cur) => acc + cur["value"], 0)
            .toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
        </span>
      </div>
      <p>O valor se refere ao saldo</p>
    </div>
  );
};

export default TotalMoney;
