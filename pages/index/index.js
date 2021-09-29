import React, { useState } from 'react';

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
import Sidebar from '../../components/sidebar/index.js';


import styles from './index.module.css';


const Index = (props) => {
    return (
        <Layout>
            <Bg />
            <div className = {styles.pageScroll}>
              <div className = {styles.pageContainer}>
                <Head />
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
        </Layout>
    )};

export default Index;


