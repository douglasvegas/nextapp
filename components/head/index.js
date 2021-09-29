import React, { useState } from 'react';
import styles from './index.module.css';
let classNames = require('classnames')


const HeadCustom = (props) => {
    return (
        <header>
            <div className = {styles.fl}>
            <a href = '/index' className = {styles.imgWrapA}>
                <img src='/logo.svg' alt='' className={styles.homesvg} />
            </a>
            </div>
            <div className = {classNames(styles.nav, styles.fr)}>
            <ul>
                <li>
                    <a href='/index'>
                    关于我
                    </a>
                </li>
                <li>简历</li>
                <li>
                    <a href='/blog'>
                    杂的谈
                    </a>
                </li>
                <li>
                    <a href='/category_v2/tech'>
                    技术
                    </a>
                </li>
                <li>联系我</li>
                <li>打赏</li>
            </ul>
            </div>
        </header>

    )};
    
export default HeadCustom;





