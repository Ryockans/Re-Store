import React from "react";
import {Link} from "react-router-dom";

import styles from './header.module.css'

const Header = () => {
  return (
    <header className={styles.navigation}>
      <Link to='/' className={styles.logo}>
        <span >Re-Store</span>
      </Link>

      <Link to='/cart' className={styles.link}>
        Cart
      </Link>
    </header>
  )
}

export default Header