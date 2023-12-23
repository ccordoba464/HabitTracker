import styles from "./Header.module.css";

export default function Header() {
  return (
    <>
      <div className={styles.navbar}>
        <div className={styles.title}>Tornado</div>
      </div>
      <div className={styles.content}></div>
    </>
  );
}
