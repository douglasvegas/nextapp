import React  from 'react';
import fetch  from 'isomorphic-unfetch';
import Layout from '../../components/layout';
import Header from '../../components/header/index';
import Pannel from '../../components/pannel/index';
import CommonList from "../../components/commonList";

const Search = (props) => {

  return (
    <Layout>
      <Header />
      <div className={'mainPage'}>
        <CommonList
          lists = {props.lists}
        />
        <Pannel />
      </div>
    </Layout>
  )

};


export default Search;
Search.getInitialProps = async (ctx) => {
  let { query} = ctx;
  let url = process.env.NEXT_PUBLIC_PRODUCTION_BASE_URL + 'postSearch';
  url += '?s=' + encodeURI(query.s);

  const res = await fetch(url);
  const json = await res.json();
  let lists = json.response; // 列表信息

  return {
    lists,
  };
};
