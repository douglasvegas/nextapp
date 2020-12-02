import { useRouter } from 'next/router';
import fetch from 'isomorphic-unfetch';
import React, { useState } from 'react';

import Layout from '../../../components/layout';
import Head from 'next/head';
import Header from '../../../components/header/index';
import styles from './post.module.css';
import Pannel from '../../../components/pannel/index';
let classNames = require('classnames')

const Post = ({json}) => {
    const [isFullScreeen, setFullScreen] = useState(false);

    const handleFullScreen = (flag) => {
        if(flag) {
            document.querySelector('#rightPannel').style.display = 'none';
        } else {
            document.querySelector('#rightPannel').style.display = 'block';
        }
        setFullScreen(flag);
    };

    const router = useRouter();
    const {id} = router.query;

    return (
        <Layout>
            <Head>
                <title>{json.title} | Jarvis Sun</title>
                <link rel='icon' href='/aiglab.png' />
                <script data-ad-client='ca-pub-9856877633666184' async src='https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js'></script>
            </Head>
            <Head>
                <link rel='stylesheet' type='text/css' href='/prism.css' />
                <script src='/prism.js'></script>
            </Head>
        <div>
            <Header />
            <div className = {'mainPage'} >
                <div className = {classNames(styles.contentWrap, {'full': isFullScreeen})} >
                    {
                        !isFullScreeen ?
                          <img src="/icons/fullscreen.svg" alt=""
                               className={styles.fullScreen}
                               onClick={() => handleFullScreen(true)}
                          />
                          :
                          <img src="/icons/cancelFullscreen.svg" alt=""
                               className={styles.fullScreen}
                               onClick={() => handleFullScreen(false)}
                          />

                    }
                    <p className = { styles.title }>
                        <span>{json.title}</span>
                    </p>
                    <div className = {`${styles.content} content`} dangerouslySetInnerHTML={{__html: json.content}}></div>
                    <div className = {styles.contactMe}>
                        <span>📧 Email：sunstar1227@163.com</span>
                    </div>
                </div>
                <Pannel />
            </div>

            <style jsx global>
                {`
                  .content img {
                        border-radius: 8px;
                        height: auto;
                        width: 100% !important;
                        margin: 10px 0 !important;
                   }
                   .full {
                    width: 90%
                   }
                `}
            </style>
        </div>
        </Layout>
    )
};

export default Post;

Post.getInitialProps = async ({req, query}) => {
    let id = query.id;
    let url = process.env.NEXT_PUBLIC_PRODUCTION_BASE_URL + 'posts/'+id;
    const res = await fetch(url);
    const json = await res.json();
    return {json: json.response};
};


