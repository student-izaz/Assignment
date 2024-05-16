import styles from './Links.module.css';

function Links() {
  return (
    <nav>
      <div className={styles.mainLinks}>
        <ul>
            <li><a href="#">Overview</a></li>
            <li><a href="#">Curriculam</a></li>
            <li><a href="#">Refund</a></li>
            <li><a href="#">Testimonials</a></li>
        </ul>
      </div>
    </nav>
  )
}

export default Links
