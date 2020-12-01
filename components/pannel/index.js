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
            <img src='/icons/announcement.svg'
                 className = 'pannelIcon' />
                 <span>公告</span>
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
            <img src='/icons/search.svg'
                 className = 'pannelIcon' />
            <span>搜索</span>
          </div>
          <Search />
        </div>

        <div className={`${styles.pannelSection} ${styles.itemizeSection}`}>
          <div className={styles.header}>
            <img src='/icons/itemize.svg'
                 className = 'pannelIcon' />
            <span>分类</span>
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
            <img src='/icons/collection.svg'
                 className = 'pannelIcon' />
            <span>收藏</span>
          </div>
          <Collection />
        </div>
      </div>
    );
  }
}
