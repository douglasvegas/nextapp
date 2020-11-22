import React from 'react'
import fetch  from 'isomorphic-unfetch';
import Link from 'next/link'
import Layout from '../../components/layout'
import Header from "../../components/header"

const Cowsay = ({json}) => {
    return (
        <Layout>
            <Header />
            <div className={'list'}>
                {
                    json.map(item => {
                        return (
                            <div key={item.id} className={'postItem'} >
                                <Link href={'/post/[id]'}  as={'/post/'+ item.id} >
                                    <p className={'title'}
                                    >{item.title}</p>
                                </Link>
                                <p className={'publish'}>
                                    <span className={'publishTime'}>  发布于  {item.create_at.split("T")[0].replace(/\-/g, '/')}</span>
                                </p>
                            </div>
                        )
                    })
                }
            </div>
            <style jsx global>
                {`
                  body {
                    margin:0;
                    background-color: #f0f2f5;
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
                p {
                    margin:0;
                    line-height: 1;
                    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Segoe UI", "Helvetica Neue", "PingFang SC", "Noto Sans", "Noto Sans CJK SC", "Microsoft YaHei", 微软雅黑, sans-serif;
                }
                .postItem {
                    border-bottom:1px solid #f5f5f5;
                    padding:10px;
                }
                .postItem::last {
                    border-bottom: none;
                }

                .title {
                    text-align:left;
                    font-size: 15px;
                    font-weight: 300;
                    margin-bottom:10px;
                    color: #0c0c0c;
                    cursor:pointer;
                    word-break: break-all;
                    line-height: 1.2;
                }
                .title:hover {
                    color:#333;
                }
                .publish {
                    text-align:right;
                    font-size: 12px;
                    color: #808080;
                }
                .list {
                    margin-top:30px;
                    margin-left:25%;
                    width:50%;
                    margin-bottom:50px;
                    // padding: 16px;
                    border-radius:4px;
                    background-color: #fff;
                    border: 1px solid #e3eaef;
                    -webkit-box-shadow: 0 1px 2px 0 rgba(101,129,156,.08);
                    box-shadow: 0 1px 2px 0 rgba(101,129,156,.08);
                }
                @media (max-width: 680px) {
                    .list {
                        width:100%;
                        margin-left:0;
                        margin-top:0;
                        border-radius:0px;
                    }
                }

                    `}
            </style>
        </Layout>
    )
}

Cowsay.getInitialProps = async ({req}) => {
    let url = process.env.NEXT_PUBLIC_PRODUCTION_BASE_URL + 'posts';
    url += "?PageSize=15";
    const res = await fetch(url);
    const json = await res.json();
    return {json: json.response};
}


export default Cowsay
