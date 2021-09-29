import React, { useState } from 'react';
import styles from './index.module.css';
let classNames = require('classnames')


const Goodsites = (props) => {
   
    return (
        <div className = {classNames(styles.goodsites, styles.mgb30)}>
            <h2 className = {styles.titleWithUderline}>这些网站还行～</h2>
            <div className = {styles.siteWrap}>
            <ul>
                <li>
                    <a href = 'https://www.cnblogs.com/' target="_blank">
                        <img src = 'https://aiglab.com/static/cnblog.png'/>
                    </a>
                </li>
                <li>
                    <a href = 'https://juejin.cn/' target="_blank">
                        <img src = 'https://aiglab.com/static/juejin.png'/>
                    </a>
                </li>
                <li>
                    <a href = 'https://segmentfault.com/' target="_blank">
                        <img src = 'https://aiglab.com/static/segment.png'/>
                    </a>
                </li>
                <li>
                    <a href = 'https://studygolang.com/' target="_blank">
                        <img src = 'https://aiglab.com/static/gochina.png'/>
                    </a>
                </li>
                <li>
                    <a href = 'https://hi-andy.com/' target="_blank">
                        <img src = 'https://aiglab.com/static/hiandy.png'/>
                    </a>
                </li>
                <li>
                    <a href = 'https://stackoverflow.com/' target="_blank">
                        <img src = 'https://aiglab.com/static/stackoverflow.png'/>
                    </a>
                </li>
            </ul>
            </div>
        </div>


    )};

export default Goodsites;





