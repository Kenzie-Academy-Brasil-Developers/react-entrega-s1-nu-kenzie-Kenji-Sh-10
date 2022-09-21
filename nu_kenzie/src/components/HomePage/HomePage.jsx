import styles from "./HomePage.module.css";

const HomePage = ({ children }) => {
  return (
    <div className={styles["container"]}>
      {children[0]}
      <div className={styles["content"]}>
        {children[1]}
        {children[2]}
      </div>
    </div>
  );
};

export default HomePage;
