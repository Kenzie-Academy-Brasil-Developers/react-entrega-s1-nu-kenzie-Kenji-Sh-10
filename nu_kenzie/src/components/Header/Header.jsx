import styles from "./Header.module.css";

const Header = ({ setIsLoggedIn }) => {
  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div className={styles["header"]}>
      <h1>
        <span>Nu</span> Kenzie
      </h1>
      <button onClick={handleLogout}>Inicio</button>
    </div>
  );
};

export default Header;
