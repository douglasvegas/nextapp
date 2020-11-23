import { useRouter } from 'next/router';
import fetch from 'isomorphic-unfetch';
import React from 'react';
import Layout from '../../../components/layout';
import Head from 'next/head';
import Header from '../../../components/header';
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
            <div className={'contentWrap'}>
                <p className={'title'}>
                    <span>{json.title}</span>
                </p>
                <div className={'content'} dangerouslySetInnerHTML={{__html: json.content}}></div>
                <div className={'contactMe'}>
                    <span>📧Email：sunstar1227@163.com</span>
                </div>
            </div>
            <style jsx global>
                {`
                  body {
                    margin:0;
                    background-color: #FEF5DD
                  }
                  .content img {
                        border-radius: 8px;
                        height: auto;
                        
                    }
                   
                  @media (max-width: 680px) {
                      .content {
                        margin-bottom: 50px !important;
                      }
                      .content img {
                        border-radius: 8px;
                        height: auto;
                        max-width:100% !important;
                      }
                  }
                  ::selection {
                    background: #F037A5;
                    color: #CDF564;
                  }
                `}
            </style>
            <style jsx>
                {`
                    .topTip {
                        border-width: 5px 0 0;
                        border-top-style: solid;
                        -o-border-image: linear-gradient(139deg, #fb8817, #ff4b01, #c12127, #e02aff) 3;
                        border-image: linear-gradient(139deg, #fb8817, #ff4b01, #c12127, #e02aff) 3;
                    }
                    .contentWrap {
                        margin-top: 30px;
                        margin-left: 15%;
                        width: 80%;
                        margin-bottom: 30px;
                        border-radius: 4px;
                        background-color: rgb(255, 232, 191);
                        border: 1px solid #e3eaef;
                        -webkit-box-shadow: 0 1px 2px 0 rgba(101,129,156,.08);
                        box-shadow: 0 1px 2px 0 rgba(101,129,156,.08);
                    }
                    .contentWrap .title {
                        text-align:left;
                        font-size: 24px;
                        padding:0 5%;
                        color:#0c0c0c;
                        font-weight:500;
                        margin-bottom: 50px;
                        word-break: break-word;
                        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Segoe UI', 'Helvetica Neue', 'PingFang SC', 'Noto Sans', 'Noto Sans CJK SC', 'Microsoft YaHei', 微软雅黑, sans-serif;
                    }
        
                    .contentWrap .content {
                        font-weight:400;
                        font-size:16px;
                        padding:0 5%;
                        color:#333;
                        margin-bottom: 60px;
                    }
                    
                    .contactMe {
                        text-align:center;
                    }
                    
                    .contactMe span{
                        font-size: 20px;
                        color: #999;
                    }
        
        
                    @media (max-width: 680px) {
                        .contentWrap {
                            width: 100%;
                            margin-left: 0;
                            margin-top: 0;
                            border-radius:0;
                            overflow: hidden;
                            border:none;
                        }
                        .contentWrap .title {
                            text-align:left;
                            font-size: 24px;
                            padding:0 5%;
                            font-weight:300;
                            margin-bottom: 20px;
                        }
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


