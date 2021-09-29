import React, { useState } from 'react';
import styles from './index.module.css';
let classNames = require('classnames')


const Me = (props) => {
    const [isVisible, setiIsVisible] = useState(false);
    const setVisible = () => {
      setiIsVisible(!isVisible)
    }
    return (
        <div className = {classNames(styles.me, styles.mgb30)}>
            <div className = {classNames(styles.avat, styles.fl)}>
                <div className = {styles.innerAvat}>

                </div>
            </div>
            <div className = {styles.desc}>
                <div className = {styles.scrollTitles}>
                    <span>前端开发</span>
                </div>
                <h1 className = {styles.author}>Jarvis.Sun</h1>
                <div className = {styles.intro}>
                    <p>
                    专注前端开发与设计，喜欢一切美的事物，喜欢一切新奇特，爱好各种球类🏓️🏀 
                    </p>
                    <p>
                    欢迎约球。你知道哪里找到我～
                    </p>
                </div>
            </div>
        </div>
    )};

export default Me;





