import React, { useState } from 'react';
import styles from './index.module.css';
let classNames = require('classnames')


const Goodsites = (props) => {
   
    return (
        <div className = {classNames(styles.whattheysay, styles.mgb30)}>
            <h2 className = {styles.titleWithUderline}>他们说的不错！</h2>
            <div className = {styles.sayingList}>
            <div className = {styles.sayingWrap}>
                <div className = {styles.quoteWrap}>
                <div className = {styles.quoteContent}>
                    <img src = 'https://aiglab.com/static/Marvin_Minsky.jpeg' />
                    <div className={styles.quoteTxt}>
                        <p>
                        It’s ridiculous to live 100 years and only be able to remember 30 million bytes. You know, less than a compact disc. The human condition is really becoming more obsolete every minute.
                        </p>
                    </div>
                    <div className={styles.quoteAnthor}>
                        <h5 className = {styles.author}>Marvin Minsky</h5>
                        <p className={styles.firm}>人工智能研究的奠基人</p> 
                    </div>
                </div>
                </div>
            </div>

            <div className = {styles.sayingWrap}>
                <div className = {styles.quoteWrap}>
                <div className = {styles.quoteContent}>
                    <img src = 'https://aiglab.com/static/Edsger_Wybe_Dijkstra.jpeg' />
                    <div className={styles.quoteTxt}>
                        <p>
                            The question of whether computers can think is like the question of whether submarines can swim.
                        </p>
                    </div>
                    <div className={styles.quoteAnthor}>
                        <h5 className = {styles.author}>Edsger W. Dijkstra</h5>
                        <p className={styles.firm}>图灵奖获得者</p>
                    </div>
                </div>
                </div>
            </div>
            
            </div> 
            
        </div>

    )};

export default Goodsites;





