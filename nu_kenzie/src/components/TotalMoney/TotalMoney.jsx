import styles from "./TotalMoney.module.css";

const TotalMoney = ({totalMoney}) => {
  return (
    <div className={styles["total_money"]}>
      <div>
        <p>Valor total: </p>
        <span>R$ {totalMoney}</span>
      </div>
      <span>O valor se refere ao saldo</span>
    </div>
  );
};

export default TotalMoney;
