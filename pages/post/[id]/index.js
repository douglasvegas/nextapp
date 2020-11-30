import { useRouter } from 'next/router';
import fetch from 'isomorphic-unfetch';
import React from 'react';
import Layout from '../../../components/layout';
import Head from 'next/head';
import Header from '../../../components/header/index';
import styles from './post.module.css';
import Pannel from '../../../components/pannel/index';

const Post = ({json}) => {

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
                <div className = { styles.contentWrap}>
                    <p className = { styles.title }>
                        <span>{json.title}</span>
                    </p>
                    <div className = {styles.content} dangerouslySetInnerHTML={{__html: json.content}}></div>
                    <div className = {styles.contactMe}>
                        <span>📧Email：sunstar1227@163.com</span>
                    </div>
                </div>
                <Pannel />
            </div>

            <style jsx global>
                {`
                  .content img {
                        border-radius: 8px;
                        height: auto;
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


