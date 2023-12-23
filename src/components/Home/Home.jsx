import styles from "./Home.module.css";

export default function Home() {
  return (
    <div className={styles.home}>
      <div className={styles.tasksContainer}>
        <div className={styles.taskList}>
          <textarea rows="1" className={styles.quickAdd}></textarea>
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
          <textarea rows="1" className={styles.quickAdd}></textarea>
          <div className={styles.taskItem}>
            <div className={styles.text}>
              <div className={styles.taskTitle}>Task</div>
              <div className={styles.taskDesc}>Do thing</div>
            </div>
            <input type="checkbox" className={styles.checkbox} />
          </div>
        </div>
        <div className={styles.taskList}>
          <textarea rows="1" className={styles.quickAdd}></textarea>
          <div className={styles.taskItem}>
            <div className={styles.text}>
              <div className={styles.taskTitle}>Task</div>
              <div className={styles.taskDesc}>Do thing</div>
            </div>
            <input type="checkbox" className={styles.checkbox} />
          </div>
        </div>
        <div className={styles.taskList}>
          <textarea rows="1" className={styles.quickAdd}></textarea>
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
