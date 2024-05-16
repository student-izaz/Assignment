import styles from "./Opportunity.module.css";

function Opportunity() {
  return (
    <section className={styles.opportunity}>
      <div className={styles.opportunity_content}>
        <div className={styles.heading}>
          <h1>
            Don't miss out on this{" "}
            <span style={{ color: "rgb(184, 7, 160)" }}>
              limited-time
              <br /> opportunity
            </span>{" "}
            to learn for{" "}
            <span style={{ color: "rgb(184, 7, 160)" }}>free!</span>{" "}
          </h1>
        </div>
        <div className={styles.seats_left_banner}>
          <div className={styles.offer_banner}>
            <div className={styles.banner_heading}>
              <h2>100% Refund Offer 😎</h2>
            </div>
            <div className={styles.seat_left}>
              <div className={styles.text}>20 Seats Left</div>
              <input
                type="range"
                className={styles.range}
                max={100}
                value={20}
              />
            </div>
            <div className={styles.offer_time}>
              <p>Offer ends in 10:00Mins</p>
            </div>
          </div>
        </div>
        <div className={styles.offer_steps}>
          <div className={styles.heading}>
            <h2>How does it work?</h2>
          </div>
        </div>
        <div className={styles.steps_row}>
          <div className={styles.step_col}>
            <div className={styles.step}>
              <p>Step1</p>
            </div>
            <div className={styles.step_card}>
              <div className={styles.card_heading}>
                Step 1:Enroll into your favorite course for only ₹1,499
              </div>
              <div className={styles.step_btm_txt}>
                Start Learning with <b>Lifetime Course Access.</b>
              </div>
            </div>
          </div>
          <div className={styles.step_col}>
            <div className={styles.step}>
              <p>Step2</p>
            </div>
            <div className={styles.step_card}>
              <div className={styles.card_heading}>
                Step 2:Complete Course & Assignments within 2 Years!
              </div>
              <div className={styles.card_text}>
                <large style={{fontSize: '20px', fontWeight: 600, color: 'rgb(248, 177, 6)'}}>2</large> <small>Years time from the date of enrollment</small>
              </div>
              <div className={styles.step_btm_txt}>
                Finish the course within <b>2 Years,</b> to Quality for Refund.
              </div>
            </div>
          </div>
          <div className={styles.step_col}>
            <div className={styles.step}>
              <p>Step3</p>
            </div>
            <div className={styles.step_card}>
              <div className={styles.card_heading}>
                Step 3:Receive 100% Refund upon completion
              </div>
              <div className={styles.card_text}>
                <large style={{fontSize: '20px', fontWeight: 600, color: 'rgb(248, 177, 6)'}}>100%</large> <small>Enrollment Fee is refunded</small>
              </div>
              <div className={styles.step_btm_txt}>
                upon Course Completion within <b>2 Years,</b> Get Your <b> ₹1,499 Back.</b>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Opportunity;
