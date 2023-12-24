import styles from "./Header.module.css";
import eye from "../../../public/eye1.gif";

export default function Header() {
  return (
    <>
      <div className={styles.header}>
        <div className="flex">
          <div className={styles.title}>TornadoTracker</div>
          <ul className={styles.navbar}>
            <li className={styles.tab}>Tasks</li>
            <li className={styles.tab}>Progression</li>
            <li className={styles.tab}>Visit</li>
            <li className={styles.tab}>Help</li>
          </ul>
        </div>

        <ul className={styles.navbar}>
          <li className={styles.tab}>Notifications</li>
          <li className={styles.tab}>User</li>
        </ul>
      </div>
      <div className={styles.content}>
        <img src={eye} alt="" className={styles.gif} />
      </div>
    </>
  );
}
