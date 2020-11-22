import React, { Component, useContext } from "react"
import Link from "next/link";
import Layout from '../components/layout'
import MenuContext from "./MenuContext";
import Head from "next/head";

const Header = () => {
  const {json} = useContext(MenuContext);
  function seeAll(flag) {
    if (flag == 0) {
      console.log('show')
      document.querySelector(".allCategories").style.display = 'block'
    }
    else if (flag == 1){
      document.querySelector(".allCategories").style.display = 'none'
    }

  }
    return (
      <Layout>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Think before you speak. Read before you think.｜Jarvis Sun</title>
          <link rel="icon" href="/aiglab.png" />
        </Head>
        {/*<Head>*/}
        {/*    <script data-ad-client="ca-pub-9856877633666184" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>*/}
        {/*</Head>*/}
        <nav className={'categoryNav'}>
          <Link href={'/' } as={'/'} key={'icon'}>
            <img src="/aiglabhome.svg" alt="" with="100px" height="100px" className={'homesvg'} />
          </Link>

          <ul>
            {
              (json&& json.length>0) && json.map(item => {
                if (item.StateFlag == 3) {
                  return (
                    <Link href={'/category/[name]' } as={'/category/'+ item.EngName} key={item.id}>
                      <li>{item.name}</li>
                    </Link>
                  )
                }
                return null
              })
            }
            <li key={"all"} className={"seeAll"} onClick={() => seeAll(0)} onMouseEnter={() => seeAll(0)} >{"其他"}</li>
          </ul>
          <div className={'allCategories'} onMouseLeave={() => seeAll(1)}>
            {
              (json&& json.length>0) && json.map( item => {
                if (item.StateFlag == 2) {
                  return (
                    <Link href={'/category/[name]' } as={'/category/'+ item.EngName }   key={item.id}>
                      <div className={'categoryItem'} >{item.name}</div>
                    </Link>
                  )
                }
                return null
              })
            }
            <div className={'closeBtn'}></div>
            <span className={'closeBtn'} onClick={() => seeAll(1)}>close</span>
          </div>
        </nav>
        <div className="topTip" ></div>
        <style jsx global>
          {`
          body {
            margin: 0;
            background: #FEF5DD;
          }
          .categoryNav {
            background: #CDF564;
            position: relative;
          }
          .homesvg {
            position: absolute;
            width: 40px;
            height: 40px;
            left: 40px;
            top: 2px;
          }
          .fr {
            float: right;
          }
          @media (max-width: 680px) {
              ul {
                display:flex;
                flex-direction: row;
                margin: 0;
                padding: 0;
                width: 100% !important;
                margin-left: 0% !important;
                background: #CDF564;
              }
              ul li {
                list-style: none;
                flex:1;
                text-align: center;
                cursor: pointer;
                font-size: 14px;
                color: #F037A5 !important;
                font-weight: 900;
              }
              .homesvg {
                display:none;
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
          
          ul {
            display:flex;
            flex-direction: row;
            margin: 0;
            padding: 0;
            width: 50%;
            padding: 10px 0;
            margin-left: 25%;
          }
          ul li {
            list-style: none;
            flex:1;
            text-align: center;
            cursor: pointer;
            font-size: 18px;
            color: #F037A5 !important;
            font-weight: 900;
          }
          ul li:hover {
            opacity: .7;
          }
          
          .seeAll:hover {
            
          }
          
          .mainPage {
            background: #00BCD4;
            padding-bottom: 30px;
          }
         
          .allCategories {
            display: none;
            position: absolute;
            top: 60px;
            width: 30%;
            right: 20%;
            height: auto;
            background: #CDF564;
            padding: 20px;
            border-radius: 6px;
          }
          
          .allCategories .categoryItem {
            padding: 10px;
            border-radius: 2px;
            display: inline-block;
            margin: 10px;
            background: #F037A5;
            color: black;
            font-weight: 600;
            cursor: pointer;
          }
          
          .allCategories .categoryItem:hover {
            color: white;
            font-weight: 600;
          }
          
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
                    border-bottom:1px solid #f3e674d1;
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
                    margin-bottom:20px;
                    border-radius:4px;
                    background-color: #fff;
                    -webkit-box-shadow: 0 1px 2px 0 rgba(101,129,156,.08);
                    box-shadow: 0 1px 2px 0 rgba(101,129,156,.08);
                   
                }
                .closeBtn {
                  font-size: 18px;
                  color: black;
                  font-weight: 700;
                  text-align: right;
                  width: 100%;
                  height: 10px;
                  cursor: pointer;
                  margin-left: 20px;
                }
                @media (max-width: 680px) {
                    .list {
                        width:100%;
                        margin-left:0;
                        margin-top:0;
                        border-radius:0px;
                        box-shadow: none !important;
                    }
                    .allCategories {
                      width: 100%;
                      left: 0;
                      top: 50px;
                      padding: 0px;
                      border-radius: 0px;
                      padding-bottom: 50px;
                    }
                    .mainPage {
                          padding: 0;
                    }
                }
        `}
        </style>
      </Layout>
    )
};

export  default  Header;