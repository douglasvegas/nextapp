import React, { Component } from 'react';
import Router from 'next/router';
import NProgress from 'nprogress';
import Head from 'next/head';
// import { initGA, logPageView } from './ga.js';



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
                {this.props.children}
            </div>
        )
    }
}
