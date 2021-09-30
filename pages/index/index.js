import React from 'react'
import Layout from '../../components/layout'
import Footer from '../../components/footer'
import fetch from 'isomorphic-unfetch';
import Header from '../../components/header/index';
import Pannel from '../../components/pannel/index';
import styles from './index.module.css';
import CommonList from "../../components/commonList";

const Home = (props) => {

    return (
      <Layout>
        <Header />
        <div className = { styles.bd }>
          <div className={ 'mainPage' }>
            <CommonList
              lists = {props.lists}
              pageInfo = {props.pageInfo}
            />
            <Pannel />
          </div>
        </div>
        <Footer />
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
        `}
      </style>
    </Layout>
    )};

export default Home;

Home.getInitialProps = async ({req, query}) => {
  let PageSize = 20;
  let PageIndex = query.p >= 1 ? query.p : 1;
  let urlList = process.env.NEXT_PUBLIC_PRODUCTION_BASE_URL + 'posts';
  urlList += '?PageSize=' + PageSize  + '&PageIndex=' + Number(PageIndex - 1);
  let resList = await fetch(urlList);
  let json = await resList.json();
  let lists = json.response; // 列表信息
  let pageTotal = Math.ceil(json.totalSize / PageSize);

  let pageInfo = {PageSize, PageIndex, pageTotal, categoryEngName: ''}; // 分页信息

  return {
    lists,
    pageInfo
  }
};
