import styles from "./Certificates&Internship.module.css";

function CertificateAndInternship() {
  return (
    <section className={styles.CertificateAndInternship}>
      <div className={styles.heading}>
        Unlock{" "}
        <span style={{ color: "rgb(184, 7, 160)" }}>6 Certificates </span>&{" "}
        <span style={{ color: "rgb(184, 7, 160)" }}>
          Internship Opportunities!
        </span>
      </div>
      <div className={styles.content}>
        <div className={styles.certificates}>
          <div className={styles.heading2}>
            <h3>Get 6 Industry Recognized Certificates!</h3>
          </div>
          <div className={styles.certificate}>
            <div className={styles.sidebar}>
              <div className={styles.top}>
                <div className={styles.certificate_id}>
                  CERTIFICATE-ID: <b>TD-UIUX-2023-234</b>
                </div>
                <div className={styles.date}>
                  DATE IF ISSUE: <b> SEPTEMBER 6, 2023</b>
                </div>
              </div>
              <div className={styles.middle}>
                <div className={styles.title}>UI/UX DESIGNING</div>
                <div className={styles.middle_text}>
                  <h3>CERTIFICATE OF COMPLETION</h3>
                </div>
              </div>
              <div className={styles.bottom}>WWW.LOGO.COM</div>
            </div>
            <div className={styles.main_area}>
              <div className={styles.head}>
                <div className={styles.logo}>TuteDude</div>
                <div className={styles.verify_mail}>
                  <small>Verify at www.LOGO.com/verify-certificate</small>
                </div>
              </div>
              <div className={styles.main_middle}>
                <div className={styles.text}>
                  THIS CERTIFICATE IS PROUDLY PRESENTED TO
                </div>
                <div className={styles.name}>
                  <h3>John Doe</h3>
                </div>
                <div className={styles.main_text}>
                  This certifies that John Doe complete the UI UX Designing course on  september 22, 2023. All coursework and assessment were successfully finished to meet LOGO's standards. LOGO wishes you the best in all your future endavours.
                </div>
              </div>
              <div className={styles.bottom}>
                <div className={styles.signature}>
                    <div className={styles.sign}>
                        <div className={styles.sign_name}>Shivam Goyal</div>
                        <div className={styles.founder}>Co Founder</div>
                    </div>
                    <div className={styles.sign}>
                        <div className={styles.sign_name}>Shivam Goyal</div>
                        <div className={styles.founder}>Co Founder</div>
                    </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.tags}>
            <p>Official and Verified</p>
            <p>Enhances Credibility</p>
          </div>
        </div>

        <div className={styles.internship}>
          <div className={styles.heading2}>
            <h3>Bag Internship Opportunities!</h3>
          </div>
          <div className={styles.internship_text}>
            <p>
              With every course, we make you not only industry-ready but also help you crack your first internship.
            </p>
          </div>
          <div className={styles.img}>
            <img src="" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default CertificateAndInternship;
