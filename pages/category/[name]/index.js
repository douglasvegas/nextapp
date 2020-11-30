import React from 'react';
import fetch  from 'isomorphic-unfetch';
import Layout from '../../../components/layout';
import Header from '../../../components/header/index';
import Pannel from '../../../components/pannel/index';
import CommonList from "../../../components/commonList";

const Category = ({lists, pageInfo}) => {

  return (
    <Layout>
        <Header />
        <div className={'mainPage'}>
          <CommonList
            lists = {lists}
            pageInfo = {pageInfo}
          />
          <Pannel />
        </div>
    </Layout>
  )

};

export default Category;

Category.getInitialProps = async (ctx) => {
  let {req, query} = ctx;
  let categoryEngName = query.name;
  let PageSize = 20;
  let url = process.env.NEXT_PUBLIC_PRODUCTION_BASE_URL + 'posts';
  url += '?PageSize=' + PageSize + '&CategoryName=' + categoryEngName;
  const res = await fetch(url);
  const json = await res.json();
  let pageTotal = Math.ceil(json.totalSize / PageSize);

  let lists = json.response; // 列表信息
  let pageInfo = {PageSize, pageTotal, categoryEngName}; // 分页信息

  return {
    lists,
    pageInfo
  };
};
