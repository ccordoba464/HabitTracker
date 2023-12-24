import PropTypes from "prop-types";
import styles from "./ProgressBar.module.css";

export default function ProgressBar(props) {
  const percentage = Math.min(100, Math.max(0, props.completed));

  return (
    <div className={styles.progressContainer}>
      <div className={styles.progressBar} style={{ width: `${percentage}%` }}>
        <span className={styles.progressLabel}>{`${percentage}%`}</span>
      </div>
    </div>
  );
}

ProgressBar.propTypes = {
  completed: PropTypes.number,
};
