import { useRouter } from "next/router";
import fetch from "isomorphic-unfetch";
import React from "react";
import Link from "next/link"
import Layout from "../../../components/layout"
import Head from 'next/head'

const Post = ({json}) => {
    const router = useRouter()
    const {id} = router.query

    return (
        <Layout>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>{json.title} | Jarvis Sun</title>
                <link rel="icon" href="/aiglab.png" />
                <script data-ad-client="ca-pub-9856877633666184" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
            </Head>
            <Head>
                <link rel="stylesheet" type="text/css" href="/prism.css" />
                <script src="/prism.js"></script>
            </Head>
        <div>
            <div className="topTip" ></div>

            <div className={'contentWrap'}>
                <p className={'title'}>
                    <span>{json.title}</span>
                </p>
                <div className={'content'} dangerouslySetInnerHTML={{__html: json.content}}></div>
                <div className={'contactMe'}>
                    <span>Email：sunstar1227@163.com</span>
                </div>
            </div>
            <style jsx global>
                {`
                  body {
                    margin:0;
                    // background-color: #f0f2f5;
                    background-color: #24292e
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
                body {
                    background: #f5f5d5;
                }
                .topTip {
                    border-width: 5px 0 0;
                    border-top-style: solid;
                    -o-border-image: linear-gradient(139deg, #fb8817, #ff4b01, #c12127, #e02aff) 3;
                    border-image: linear-gradient(139deg, #fb8817, #ff4b01, #c12127, #e02aff) 3;
                }
                .contentWrap {
                    margin-top: 30px;
                    margin-left: 25%;
                    width: 50%;
                    margin-bottom: 50px;
                    border-radius: 4px;
                    background-color: #fff;
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
                    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Segoe UI", "Helvetica Neue", "PingFang SC", "Noto Sans", "Noto Sans CJK SC", "Microsoft YaHei", 微软雅黑, sans-serif;
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
}

Post.getInitialProps = async ({req, query}) => {
    let id = query.id;
    let url = 'http://localhost:8080/api/v1/posts/'+id;
    let protocol = '';
    if(req) {
        protocol = req.headers["x-forwarded-proto"] + '://';
        if(req.headers.host.indexOf('localhost') == -1) {
            url = `${protocol}aiglab.com/api/v1/posts/${id}`;
        }
    }   else if (window) {
        protocol = window.location.protocol + '//';
        if(window.location.href.indexOf('localhost') == -1) {
            url = `${protocol}aiglab.com/api/v1/posts/${id}`;
        }
    }
    console.log('url:' + url)
    const res = await fetch(url);
    const json = await res.json();
    return {json: json.response}
}


export default Post
