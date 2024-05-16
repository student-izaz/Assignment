import styles from './Facts.module.css';
import { MdCallToAction } from "react-icons/md";


function Facts() {
  return (
    <div className={styles.facts}>
      <div className={styles.fact_content}>
        <div className={styles.fact}>
            <div className={styles.fact_icon}>
                <MdCallToAction />
            </div>
            <div className={styles.fact_text}>
                <div className={styles.fact_text_lg}>24</div>
                <div className={styles.fact_text_sl}>Courses</div>
            </div>
        </div>
        <div className={styles.fact}>
            <div className={styles.fact_icon}>
                <MdCallToAction />
            </div>
            <div className={styles.fact_text}>
                <div className={styles.fact_text_lg}>30K+</div>
                <div className={styles.fact_text_sl}>Courses</div>
            </div>
        </div>
        <div className={styles.fact}>
            <div className={styles.fact_icon}>
                <MdCallToAction />
            </div>
            <div className={styles.fact_text}>
                <div className={styles.fact_text_lg}>100K+</div>
                <div className={styles.fact_text_sl}>Courses</div>
            </div>
        </div>
        <div className={styles.fact}>
            <div className={styles.fact_icon}>
                <MdCallToAction />
            </div>
            <div className={styles.fact_text}>
                <div className={styles.fact_text_lg}>10K+</div>
                <div className={styles.fact_text_sl}>Courses</div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Facts
