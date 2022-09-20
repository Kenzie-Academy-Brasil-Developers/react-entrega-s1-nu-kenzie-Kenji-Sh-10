import styles from "./WelcomePage.module.css";
import siteArt from "../../assets/siteArt.svg";

const WelcomePage = ({ setIsLoggedIn }) => {
  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <div className={styles["container"]}>
      <div className={styles["content"]}>
        <h1>
          <span>Nu</span> Kenzie
        </h1>
        <p>Centralize o controle das suas finanças</p>
        <span>de forma rápida e segura</span>
        <button onClick={handleLogin}>Iniciar</button>
      </div>
      <div className={styles["art"]}>
        <img src={siteArt} alt="" />
      </div>
    </div>
  );
};

export default WelcomePage;
