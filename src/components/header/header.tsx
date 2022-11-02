import React, {FC} from "react";
import {Link} from "react-router-dom";

import styles from './header.module.css'
import icon from './cart-icon.svg'

interface HeaderProps {
  numItems: number,
  total: number
}

const Header: FC<HeaderProps> = ({numItems, total}) => {

  return (
    <header className={styles.navigation}>

      <Link to='/' className={styles.logo}>
        <span >Re-Store</span>
      </Link>

      <Link to='/cart' className={styles.link}>
        <img src={icon} alt='cart image' className={styles.icon}/>
        {numItems} items (${total})
      </Link>

    </header>
  )
}

export default Header