import React from 'react'
import Layout from '../components/layout'
import Footer from "../components/footer"
import fetch from "isomorphic-unfetch";
import Link from "next/link";
import Header from '../components/header'

const Home = ({ jsonList}) => {

    return (
      <Layout>
      <div className="bd">
        <div className={"mainPage"}>
          <Header />
          <div className={'list'}>
            {
              jsonList && jsonList.map(item => {
                return (
                  <div key={item.id} className={'postItem'} >
                    <Link href={'/post/[id]'} as={'/post/'+ item.id }>
                      <p className={'title'} key={'title_' + item.title}
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
        </div>
      </div>
      <Footer />
      <style jsx global>
        {`
          body {
            margin: 0;
            background: #FEF5DD;
          }
          .bd {
            padding-top: 30px;
            background: #00BCD4;
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
              .bd {
                  padding-top: 0px !important;
              }
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
          .bd {
            padding-top: 30px;
            background: #00BCD4;
          }
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
            // background: #00BCD4;
            padding-bottom: 30px;
            // margin-top: 80px;
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
                      margin-top: 50px;
                      padding: 0;
                    }
                }
        `}
      </style>
    </Layout>
    )};

export default Home

Home.getInitialProps = async ({req, query}) => {
  let urlList = process.env.NEXT_PUBLIC_PRODUCTION_BASE_URL + 'posts';
  urlList += "?PageSize=30";
  let resList = await fetch(urlList);
  let jsonList = await resList.json();
  return {jsonList: jsonList.response}
};
