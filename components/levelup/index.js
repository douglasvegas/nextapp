import React, { useState,useContext } from 'react';
import styles from './index.module.css';
import {showLevelupContext} from '../../pages/index_v2'
let classNames = require('classnames')


const LevelUp = (props) => {
    let isVisible = useContext(showLevelupContext)
    // console.log('isVisible:',isVisible)
    if(isVisible) {
        return (
            <div className = {styles.levelup} onClick = {props.showLevelUp}>
                <img src = 'https://aiglab.com/static/gdx.jpg' onClick = {props.showLevelUp}/>
            </div>
        )
    }
    return null;
}

export default LevelUp;



