import styles from "./Home.module.css";
import ProgressBar from "../ProgressBar/ProgressBar.jsx";
import TaskList from "../TaskList/TaskList.jsx";

export default function Home() {
  return (
    <div className={styles.home}>
      <div className={styles.controlPanel}>
        <div className={styles.statsContainer}>
          <div className={styles.statCard}>
            <div className={styles.statName}>Habits</div>
            <div className={styles.statValue}>0</div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statName}>To Do's</div>
            <div className={styles.statValue}>0</div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statName}>Dailies</div>
            <div className={styles.statValue}>0</div>
          </div>
        </div>

        <div className={styles.statsContainer}>
          <p>
            > Hello, Rimbo.
            <br />> Long time, no see.
          </p>
        </div>

        <div className={styles.panelContainer}>
          <div className={styles.panelTitle}>Progression</div>
          <ProgressBar completed={30} />
        </div>
      </div>

      <div className={styles.tasksContainer}>
        <TaskList title="Habits" task="Habit" />
        <TaskList title="To Do's" task="To Do" />
        <TaskList title="Dailies" task="Daily" />
      </div>
    </div>
  );
}
