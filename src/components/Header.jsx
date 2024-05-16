import React from 'react';
import styles from './Header.module.css';

function Header() {
  return (
    <header>
      <div className={styles.logo}>LOGO</div>
      <div className={styles.authBtn}>
        <div className={styles.secondaryBtn}><a href="#">Login</a></div>
        <div className={styles.primaryBtn}><a href="#">Signup</a></div>
      </div>
    </header>
  )
}

export default Header
