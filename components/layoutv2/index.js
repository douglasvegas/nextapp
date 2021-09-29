import React, { Component } from 'react';
import Router from 'next/router';
import NProgress from 'nprogress';
import Head from 'next/head';
// import { initGA, logPageView } from './ga.js';
// import fetch from 'isomorphic-unfetch';

import Sidebar from '../sidebar';
import HeadCustom from '../head';
import FootCustom from '../foot';
import Totop from '../totop';
import Bg from '../bg';


import styles from './index.module.css';


Router.events.on('routeChangeStart', url => {
    // console.log(`Loading: ${url}`);
    NProgress.start();
});
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

export default class Layout extends Component {
    componentDidMount () {
        // if (!window.GA_INITIALIZED) {
        //     initGA();
        //     window.GA_INITIALIZED = true
        // }
        // logPageView()
    }

    render () {
        return (
            <div>
                <Head>
                    <link rel='stylesheet' type='text/css' href='/nprogress.css' />
                </Head>
                <Bg />
                <div className = {styles.pageScroll}>
                <div className = {styles.pageContainer}>
                    <HeadCustom />
                        {this.props.children}
                    <FootCustom />
                </div>
                </div>
                <Sidebar />
                <Totop />
                
            </div>
        )
    }
}
