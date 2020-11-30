import React, { Component } from 'react';
import styles from './index.module.css';

export default class Announcement extends Component{
  constructor() {
    super();
  }

  componentDidMount() {

  }

  handleSearch(type) {
    let s = document.querySelector(`#s${type}`).value;
    console.log(`/search?s=${s}`);
    let tempWindow = window.open('_blank');
    if(type == 1) {
      tempWindow.location = `/search?s=${s}`;
    } else if (type == 2) {
      tempWindow.location = `https://www.google.com/search?q=${s}`;
    } else if (type == 3) {
      tempWindow.location = `https://www.baidu.com/s?w=${s}`;
    }
  }

  render() {
    return (
      <div className={styles.outerWrap}>
        <div className={styles.searchWrap}>
          <input type="text" className={`${styles.searchInput}`} id={'s1'} />
          <span className={`${styles.searchButton}`} onClick={ () => this.handleSearch(1)}>文章搜索</span>
        </div>
        <div className={styles.searchWrap}>
          <input type="text" className={`${styles.searchInput}`} id={'s2'}  />
          <span className={`${styles.searchButton}`} onClick={ () => this.handleSearch(2)}>谷歌搜索</span>
        </div>
        <div className={styles.searchWrap}>
          <input type="text" className={`${styles.searchInput}`} id={'s3'}  />
          <span className={`${styles.searchButton}`} onClick={ () => this.handleSearch(3)}>百度搜索</span>
        </div>
      </div>
    );
  }
}


