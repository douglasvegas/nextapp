import React, { Component } from 'react';
import styles from './index.module.css';

export default class Announcement extends Component{
  constructor() {
    super();
  }

  render() {
    return (
        <div className={ styles.announcement }>
          <span className={styles.title}>有事钟无艳 无事小神仙</span>
          <span className={styles.timestamp}>2020-11-30 18:00</span>
        </div>
    );
  }
}
