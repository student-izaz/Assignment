import styles from './EnrollmentBanner.module.css';

function EnrollmentBanner() {
  return (
    <section className={styles.enrollment_banner}>
      <div className={styles.banner}>
        <div className={styles.left_side}>
            <h2>Enroll For DataScience Bundle @₹1,499 <small style={{textDecoration: 'line-through', fontSize: '14px'}}>₹2,600</small> </h2>
            <div className={styles.left_text}>
                Become an expert in the data science field by enrolling into 6 Extensive courses!
            </div>
            <div className={styles.enroll_btn}>
                <a href="#">Enroll Now</a>
            </div>
        </div>
        <div className={styles.right_side}>
            <div className={styles.right_text}>
                <small>Total number of Courses</small>
                <span>6</span>
            </div>
            <div className={styles.right_text}>
                <small>Total number of Certificates</small>
                <span>6</span>
            </div>
            <div className={styles.right_text}>
                <small>Access to Course</small>
                <span>Lifetime</span>
            </div>
        </div>
      </div>
    </section>
  )
}

export default EnrollmentBanner
