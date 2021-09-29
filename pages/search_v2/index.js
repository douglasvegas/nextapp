import React  from 'react';
import fetch  from 'isomorphic-unfetch';
import Layout from '../../components/layoutv2';
import CommonList from "../../components/commonList_v2";

const Search = (props) => {
  return (
    <Layout>
        <CommonList
          lists = {props.lists}
        />
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
