import React, { useState } from 'react';
import styles from './index.module.css';
let classNames = require('classnames')


const Indexes = (props) => {
   
    return (
        <div className = {classNames(styles.indexes, styles.mgb30)}>
            <h2 className = {styles.titleWithUderline}>有些指数</h2>
            <div className = {styles.indexWrap}>
            <ul>
                <li>
                <img />
                <h4>今日快乐指数</h4>
                <span>678</span>
                </li>

                <li>
                <img />
                <h4>今天工作时长</h4>
                <span>300</span>
                </li>

                <li>
                <img />
                <h4>心率</h4>
                <span>88</span>
                </li>

                <li>
                <img />
                <h4>体重</h4>
                <span>70</span>
                </li>
            </ul>
            </div>
        </div>

    )};

export default Indexes;





