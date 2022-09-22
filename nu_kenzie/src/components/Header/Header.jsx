import styles from "./Header.module.css";

const Header = ({ logout }) => {
  return (
    <header className={styles["header"]}>
      <h1>
        <span>Nu</span> Kenzie
      </h1>
      <button onClick={logout}>Inicio</button>
    </header>
  );
};

export default Header;
