import { useRouter } from 'next/router';
import fetch from 'isomorphic-unfetch';
import React, { useState } from 'react';

import Layout from '../../../components/layoutv2';
import Head from 'next/head';
import styles from './post.module.css';
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
                <div className = {styles.contentWrap} >
                    <p className = { styles.title }>
                        <span>{json.title}</span>
                    </p>
                    <div className = {`${styles.content} content`} 
                        dangerouslySetInnerHTML={{__html: json.content}}>
                        
                    </div>
                </div>
            </div>
            <style jsx global>
                {`
                .content img {
                        border-radius: 8px;
                        height: auto;
                        width: 100% !important;
                        margin: 10px 0 !important;
                }
                `}
            </style>
        </Layout>
    )
};

export default Post;

Post.getInitialProps = async ({req, query}) => {
    let id = query.id;
    let url = process.env.NEXT_PUBLIC_PRODUCTION_BASE_URL + 'post/guid/'+id;
    const res = await fetch(url);
    const json = await res.json();
    return {json: json.response};
};


