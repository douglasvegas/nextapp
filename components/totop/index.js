import React, { useState } from 'react';
import styles from './index.module.css';
let classNames = require('classnames')


const Totop = (props) => {
    
    const handleClick = () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
      }
    return (
        <div className={styles.toTop}
            onClick={handleClick}
          >
            ↑
          </div>

    )};

export default Totop;





