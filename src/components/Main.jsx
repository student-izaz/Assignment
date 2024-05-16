import styles from './Main.module.css';

function Main() {
  return (
    <main>
      <div className={styles.mainContent}>
        <div className={styles.rndBtn}>
            <a href="#">An <b>IIT Delhi </b>Alumni Initiative</a>
        </div>
        <div className={styles.main_text}>
            <p>Become an Expert in the Field <br /> of <span style={{color: "rgb(184, 7, 160)"}}>Data Science <br /> with 6 courses</span></p>
        </div>
        <div className={styles.main_small_text}>
            <p>Aspecially crafted Teach Kickstarter, with <b>5+ extensive online courses</b>.</p>
        </div>
        <div className={styles.main_badges}>
            <small className={styles.badge}>Personal Mentorship</small>
            <small className={styles.badge}>Personal Mentorship</small>
            <small className={styles.badge}>Personal Mentorship</small>

        </div>
        <div className={styles.btns}>
            <a href="#" className={styles.enroll_btn}>Enroll now</a>
            <a href="#" className={styles.know_more_btn}>Know mores</a>
        </div>

      </div>
    </main>
  )
}

export default Main
