import styles from "./WelcomePage.module.css";
import siteArt from "../../assets/siteArt.svg";

const WelcomePage = ({ setIsLoggedIn }) => {
  return (
    <div className={styles["container"]}>
      <div className={styles["content"]}>
        <h1>
          <span>Nu</span> Kenzie
        </h1>
        <p>Centralize o controle das suas finanças</p>
        <span>de forma rápida e segura</span>
        <button onClick={() => setIsLoggedIn(true)}>Iniciar</button>
      </div>
      <div className={styles["art"]}>
        <img src={siteArt} alt="Site Art" />
      </div>
    </div>
  );
};

export default WelcomePage;
