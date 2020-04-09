import React, {Component} from 'react'
import fetch  from 'isomorphic-unfetch';
import Head from 'next/head'
import Router from 'next/router'
import Link from 'next/link'
import Layout from '../../../components/layout'


class Cowsay extends Component {
  static async getInitialProps(ctx){
    let {req, query} = ctx;
    let categoryEngName = query.name;
    let PageSize = 20;
    let url = 'http://localhost:8080/api/v1/posts';
    let protocol = '';
    if(req) {
      protocol = req.headers["x-forwarded-proto"] + '://';
      if(req.headers.host.indexOf('localhost') == -1) {
        url = `${protocol}aiglab.com/api/v1/posts`;
      }
    }   else if (window) {
      protocol = window.location.protocol + '//';
      if(window.location.href.indexOf('localhost') == -1) {
        url = `${protocol}aiglab.com/api/v1/posts`;
      }
    }
    console.log('url:' + url)
    url += "?PageSize=" + PageSize + "&CategoryName=" + categoryEngName;
    const res = await fetch(url);
    const json = await res.json();
    let pageTotal = Math.ceil(json.totalSize / PageSize);
    return {json: json, PageSize, pageTotal, categoryEngName}
  }

  constructor(props) {
    super(props);
    console.log(props.json)
    this.state = {
      categoryEngName: props.categoryEngName,
      initPageIndex: 0,
      PageSize:  props.PageSize,
      pageTotal    : props.pageTotal,
      json: props.json.response
    };
  }

  getPage(flag) {
    this.setState({
      initPageIndex: Number(this.state.initPageIndex) + Number(flag)
    }, () => {
      console.log(this.state)
      this.getPosts()
    })
  }

  async getPosts() {
    let url = 'http://localhost:8080/api/v1/posts';
    let protocol = '';
    protocol = window.location.protocol + '//';
    if(window.location.href.indexOf('localhost') == -1) {
      url = `${protocol}aiglab.com/api/v1/posts`;
    }
    console.log('url:' + url)
    url += "?PageSize=" + this.state.PageSize + "&PageIndex=" + this.state.initPageIndex + "&CategoryName=" + this.state.categoryEngName;
    const res = await fetch(url);
    const json = await res.json();
    console.log('json')
    console.log(json)
    // return;
    this.setState({
      json: json.response
    })
  }

  render() {
    let json = this.state.json
    return (
      <Layout>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Don't just learn, experience.｜Jarvis Sun</title>
          <link rel="icon" href="/aiglab.png" />
          <script data-ad-client="ca-pub-9856877633666184" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
        </Head>
        <div>
          <div className="topTip" ></div>
          <div className={'list'}>

            {

              json.length === 0 ?

                (<div className={"noData"}>暂无数据</div>) :

                json.map(item => {
                  return (
                    <div key={item.id} className={'postItem'} >
                      <Link href={'/post/[id]'} as={'/post/' + item.id}>
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
            {
              json.length > 0 ?
                <div className={"paginator"}>
                  {
                    this.state.initPageIndex > 0 ?
                      <span className={'prev'} onClick={() => {this.getPage(-1)}}>上一页</span>
                      :null
                  }
                  {
                    this.state.initPageIndex <= this.state.pageTotal - 2  ?
                      <span className={'next'} onClick={() => {this.getPage(1)}}>下一页</span>
                      :null
                  }
                </div>
                :null
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
                  .noData {
                    text-align: center;
                    padding: 20px;
                  }
                  .paginator {
                    display: flex;
                    justify-content: center;
                    height: 30px;
                    line-height: 30px;
                  }
                  .paginator span {
                    flex: 1;
                    text-align: center;
                    font-weight: 800;
                    cursor: pointer;
                  }
                  .paginator .prev {
                    background: #F037A5;
                  }
                  .paginator .next {
                    background: #CDF564;
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
        </div>
      </Layout>
    )
  }

}
// const Cowsay = ({json}) => {
//   let initPageIndex = 0;
//   function getPage(flag) {
//     initPageIndex += flag
//     console.log(initPageIndex)
//   }
//
// }

// Cowsay.getInitialProps = async ({req, query}) => {
//   let categoryEngName = query.name;
//   let url = 'http://localhost:8080/api/v1/posts';
//   let protocol = '';
//   if(req) {
//     protocol = req.headers["x-forwarded-proto"] + '://';
//     if(req.headers.host.indexOf('localhost') == -1) {
//       url = `${protocol}aiglab.com/api/v1/posts`;
//     }
//   }   else if (window) {
//     protocol = window.location.protocol + '//';
//     if(window.location.href.indexOf('localhost') == -1) {
//       url = `${protocol}aiglab.com/api/v1/posts`;
//     }
//   }
//   console.log('url:' + url)
//   url += "?PageSize=1&CategoryName=" + categoryEngName
//   const res = await fetch(url);
//   const json = await res.json();
//   return {json: json.response}
// }


export default Cowsay
