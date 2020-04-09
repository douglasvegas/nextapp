import React from 'react'
import Head from 'next/head'
import Layout from '../components/layout'
import Footer from "../components/footer"
import fetch from "isomorphic-unfetch";
import Link from "next/link";


const Home = ({json, jsonList}) => {
    function seeAll(flag) {
      if (flag == 0) {
        console.log('show')
        document.querySelector(".allCategories").style.display = 'block'
      }
      else if (flag == 1){
        document.querySelector(".allCategories").style.display = 'none'
      }

    }
    return (<Layout>
      <div className="bd">
        <Head>
          <title>Think before you speak. Read before you think.｜Jarvis Sun</title>
          <link rel="icon" href="/aiglab.png" />
        </Head>
        <Head>
            <script data-ad-client="ca-pub-9856877633666184" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
        </Head>

        <div className={"mainPage"}>
          <nav className={'categoryNav'}>
            <img src="/aiglabhome.svg" alt="" with="100px" height="100px" className={'homesvg'} />
            <ul>
              {
                json.map(item => {
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
              <li key={"all"} className={"seeAll"} onClick={() => seeAll(0)} onMouseEnter={() => seeAll(0)} >{"其他."}</li>
            </ul>
            <div className={'allCategories'} onMouseLeave={() => seeAll(1)}>
              {
                json.map( item => {
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
          <div className={'list'}>
            {
              jsonList.map(item => {
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
            // background-color: #f0f2f5;
            background: black;
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
                    // border-bottom:1px solid #f5f5f5;
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
                    // background: #ffeb3b;
                    border: 1px solid #e3eaef;
                    -webkit-box-shadow: 0 1px 2px 0 rgba(101,129,156,.08);
                    box-shadow: 0 1px 2px 0 rgba(101,129,156,.08);
                    
                    // box-shadow: 
                    //  -10px 0px 8px #ffeb3b, /*左边阴影*/
                    //  0px -10px 8px #ffc107, /*上边阴影*/ 
                    //  10px 0px 8px #ff9800, /*右边阴影*/ 
                    //  0px 10px 8px #ff5722;"
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
    )}

export default Home

Home.getInitialProps = async ({req, query}) => {
  let url = 'http://localhost:8080/api/v1/categories';
  let urlList = 'http://localhost:8080/api/v1/posts';
  let protocol = '';
  if(req) {
    protocol = req.headers["x-forwarded-proto"] + '://';
    if(req.headers.host.indexOf('localhost') == -1) {
      url = `${protocol}aiglab.com/api/v1/categories`;
      urlList = `${protocol}aiglab.com/api/v1/posts`;
    }
  }   else if (window) {
    protocol = window.location.protocol + '//';
    if(window.location.href.indexOf('localhost') == -1) {
      url = `${protocol}aiglab.com/api/v1/categories`;
      urlList = `${protocol}aiglab.com/api/v1/posts`;
    }
  }
  console.log('url:' + url)
  console.log('urlList:' + urlList)
  urlList += "?PageSize=30"
  let resList = await fetch(urlList);
  let jsonList = await resList.json();
  const res = await fetch(url);
  const json = await res.json();
  console.log("json:", json, "jsonList:", jsonList)




  return {json: json.response, jsonList: jsonList.response}
}
