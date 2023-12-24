import styles from "./Home.module.css";
import ProgressBar from "../ProgressBar/ProgressBar.jsx";

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
        <div className={styles.taskList}>
          <div className={styles.listName}>Habits</div>
          <textarea
            rows="1"
            className={styles.quickAdd}
            placeholder="Add a Habit"
          ></textarea>
          <div className={styles.taskItem}>
            <div className={styles.text}>
              <div className={styles.taskTitle}>Task</div>
              <div className={styles.taskDesc}>Do thing</div>
            </div>
            <input type="checkbox" className={styles.checkbox} />
          </div>
          <div className={styles.taskItem}>
            <div className={styles.text}>
              <div className={styles.taskTitle}>Task</div>
              <div className={styles.taskDesc}>Do thing</div>
            </div>
            <input type="checkbox" className={styles.checkbox} />
          </div>
          <div className={styles.taskItem}>
            <div className={styles.text}>
              <div className={styles.taskTitle}>Task</div>
              <div className={styles.taskDesc}>Do thing</div>
            </div>
            <input type="checkbox" className={styles.checkbox} />
          </div>
          <div className={styles.taskItem}>
            <div className={styles.text}>
              <div className={styles.taskTitle}>Task</div>
              <div className={styles.taskDesc}>Do thing</div>
            </div>
            <input type="checkbox" className={styles.checkbox} />
          </div>
          <div className={styles.taskItem}>
            <div className={styles.text}>
              <div className={styles.taskTitle}>Task</div>
              <div className={styles.taskDesc}>Do thing</div>
            </div>
            <input type="checkbox" className={styles.checkbox} />
          </div>
        </div>
        <div className={styles.taskList}>
          <div className={styles.listName}>To Do's</div>
          <textarea
            rows="1"
            className={styles.quickAdd}
            placeholder="Add a To Do"
          ></textarea>
          <div className={styles.taskItem}>
            <div className={styles.text}>
              <div className={styles.taskTitle}>Task</div>
              <div className={styles.taskDesc}>Do thing</div>
            </div>
            <input type="checkbox" className={styles.checkbox} />
          </div>
        </div>
        <div className={styles.taskList}>
          <div className={styles.listName}>Dailies</div>
          <textarea
            rows="1"
            className={styles.quickAdd}
            placeholder="Add a Daily"
          ></textarea>
          <div className={styles.taskItem}>
            <div className={styles.text}>
              <div className={styles.taskTitle}>Task</div>
              <div className={styles.taskDesc}>Do thing</div>
            </div>
            <input type="checkbox" className={styles.checkbox} />
          </div>
        </div>
        <div className={styles.taskList}>
          <div className={styles.listName}>Rewards</div>
          <textarea
            rows="1"
            className={styles.quickAdd}
            placeholder="Add a Reward"
          ></textarea>
          <div className={styles.taskItem}>
            <div className={styles.text}>
              <div className={styles.taskTitle}>Task</div>
              <div className={styles.taskDesc}>Do thing</div>
            </div>
            <input type="checkbox" className={styles.checkbox} />
          </div>
        </div>
      </div>
    </div>
  );
}
