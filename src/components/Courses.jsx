import styles from './Courses.module.css';

function Courses() {
  return (
    <section className={styles.course_curriculam}>
        <div className={styles.content_course_curriculam}>
            <div className={styles.course_path_link}>
                <a href="#">DATASCIENCE COURSE LEARNING PATH</a>
            </div>
            <div className={styles.course_heading}>
                <h1>Data Science Course Curriculam</h1>
            </div>
            <div className={styles.curiculam_section}>
                <div className={styles.curriculam}>
                    <div className={styles.curriculam_text}>
                        <div className={styles.curr_text_lg}>C++</div>
                        <div className={styles.curr_text_sl}>Learn c++ for strong programming fundamentals.</div>
                    </div>
                    <div className={styles.view_curriculam}>
                        <a href="#">View Curriculam</a>
                    </div>
                </div>
                <div className={styles.curriculam}>
                    <div className={styles.curriculam_text}>
                        <div className={styles.curr_text_lg}>MERN Stack</div>
                        <div className={styles.curr_text_sl}>Learn c++ for strong programming fundamentals.</div>
                    </div>
                    <div className={styles.view_curriculam}>
                        <a href="#">View Curriculam</a>
                    </div>
                </div>
                <div className={styles.curriculam}>
                    <div className={styles.curriculam_text}>
                        <div className={styles.curr_text_lg}>Data Structure & Algorethm</div>
                        <div className={styles.curr_text_sl}>Learn c++ for strong programming fundamentals.</div>
                    </div>
                    <div className={styles.view_curriculam}>
                        <a href="#">View Curriculam</a>
                    </div>
                </div>
                <div className={styles.curriculam}>
                    <div className={styles.curriculam_text}>
                        <div className={styles.curr_text_lg}>Cometetive Programming</div>
                        <div className={styles.curr_text_sl}>Learn c++ for strong programming fundamentals.</div>
                    </div>
                    <div className={styles.view_curriculam}>
                        <a href="#">View Curriculam</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Courses
