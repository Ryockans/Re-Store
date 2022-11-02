import React from 'react';

import styles from './error-indicator.module.css'
import icon from './error-icon.svg'

const ErrorIndicator = () => {
  return (
    <div className={styles.errorIndicator}>
      <img src={icon} className={styles.errorIcon}  alt=''/>
      <span>Error</span>
      <span>
        Something has gone wrong
      </span>
    </div>
  );
};

export default ErrorIndicator;