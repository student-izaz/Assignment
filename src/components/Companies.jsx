import styles from './Companies.module.css';

function Companies() {
  return (
    <div className={styles.hiring_companies}>
        <div className={styles.heading}>
            <h1>Top Companies Hiring Data Scientist</h1>
        </div>
        <div className={styles.all_company}>
            <div className={styles.company}>
              <img src="" alt="" />
            </div>
            <div className={styles.company}>
              <img src="" alt="" />
            </div>
            <div className={styles.company}>
              <img src="" alt="" />
            </div>
            <div className={styles.company}>
              <img src="" alt="" />
            </div>
            <div className={styles.company}>
              <img src="" alt="" />
            </div>
            <div className={styles.company}>
              <img src="" alt="" />
            </div>
        </div>
    </div>
  )
}

export default Companies;
