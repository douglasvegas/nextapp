import React, { Component } from 'react';
import styles from './index.module.css';
import Announcement from './Annoucement';
import Search from './Search';
import Itemize from './Itemize';
import Collection from './Collection';

export default class Pannel extends Component{
  constructor() {
    super();
  }


  render() {
    return (
      <div className={ styles.rightPannel}>

        <div className = {`${styles.pannelSection} ${styles.announcementSection}`}>
          <div className={styles.header}>
            公告
          </div>
          <Announcement />
        </div>

        {/*<div className = {`${styles.pannelSection} ${styles.userSection}`}>*/}
        {/*  <div className={styles.header}>*/}
        {/*    用户模块*/}
        {/*  </div>*/}
        {/*</div>*/}

        <div className = {`${styles.pannelSection} ${styles.searchSection}`}>
          <div className={styles.header}>
            搜索
          </div>
          <Search />
        </div>

        <div className={`${styles.pannelSection} ${styles.itemizeSection}`}>
          <div className={styles.header}>
            分类
          </div>
          <Itemize />
        </div>
        {/*<div className={`${styles.pannelSection} ${styles.hotTopicSection}`}>*/}
        {/*  <div className={styles.header}>*/}
        {/*    热文模块*/}
        {/*  </div>*/}
        {/*</div>*/}
        {/*<div className={`${styles.pannelSection} ${styles.messageSection}`}>*/}
        {/*  <div className={styles.header}>*/}
        {/*    最新留言*/}
        {/*  </div>*/}
        {/*</div>*/}
        <div className={`${styles.pannelSection} ${styles.collentionSection}`}>
          <div className={styles.header}>
            收藏
          </div>
          <Collection />
        </div>
      </div>
    );
  }
}
