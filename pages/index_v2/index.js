import React, { useState, createContext } from 'react';

import Layout from '../../components/layout'
import fetch from 'isomorphic-unfetch';
import Me from '../../components/indexSection/me';
import Whatido from '../../components/indexSection/whatido';
import Theysay from '../../components/indexSection/whattheysay';
import Goodsites from '../../components/indexSection/goodsites';
import Indexes from '../../components/indexSection/someindexes';

import Head from '../../components/head';
import Foot from '../../components/foot';
import Totop from '../../components/totop';
import Bg from '../../components/bg';
import Sidebar from '../../components/sideBar';

import LevelUp from '../../components/levelup';

import styles from './index.module.css';

export const showLevelupContext = createContext(null);

const Index = (props) => {
  const [isVisible, setiIsVisible] = useState(false);
    
    const showLevelUp = () => {
      console.log('showLevelUp')
        setiIsVisible(!isVisible)
    }
    return (
        <Layout>
            <Bg />
            <div className = {styles.pageScroll}>
              <div className = {styles.pageContainer}>
                <Head showLevelUp = {showLevelUp}/>
                  <Me />
                  <Whatido />
                  <Theysay />
                  <Goodsites />
                  <Indexes />
                <Foot />
              </div>
            </div>
            <Sidebar />
            <Totop />
            <showLevelupContext.Provider value = {isVisible}>
              <LevelUp showLevelUp = {showLevelUp}/>
            </showLevelupContext.Provider>  
        </Layout>
    )};

export default Index;


