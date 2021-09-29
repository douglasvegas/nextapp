import React, { useState } from 'react';
import styles from './index.module.css';
let classNames = require('classnames')


const FootCustom = (props) => {
    return (
        <footer className = {styles.siteFoot}>
            <div className = {styles.socialMedia}>
            <ul>
                <li>微博</li>
                <li>公众号</li>
                <li>bilibili</li>
            </ul>
            </div>
            <div className = {styles.copyright}>
            <a href="http://beian.miit.gov.cn/" >沪ICP备19023642号</a>
            </div>
        </footer>

    )};
    
export default FootCustom;





