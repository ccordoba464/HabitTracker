import styles from "./TaskList.module.css";
import PropTypes from "prop-types";

export default function TaskList({ title, task }) {
  const placeholderText = `Add a ${task}`;

  return (
    <div className={styles.taskList}>
      <div className={styles.listName}>------- {title} -------</div>
      <textarea
        rows="1"
        className={styles.quickAdd}
        placeholder={placeholderText}
      ></textarea>
      <div className={styles.taskItem}>
        <div className={styles.text}>
          <div className={styles.taskTitle}>Task</div>
          <div className={styles.taskDesc}>Do thing</div>
        </div>
        <input type="checkbox" className={styles.checkbox} />
      </div>
    </div>
  );
}

TaskList.propTypes = {
  title: PropTypes.string,
  task: PropTypes.string,
};
