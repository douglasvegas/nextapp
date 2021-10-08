import React from 'react';
import App from 'next/app';
import MenuContext from "../components/MenuContext";
import './_app.css'
import Router from "next/router";
import * as gtag from '../lib/gtag'

class MyApp extends App {
  state = {
    categories: null,
    recentPosts: null
  };

  async componentDidMount() {
    let url = process.env.NEXT_PUBLIC_PRODUCTION_BASE_URL + 'categories';
    const res = await fetch(url);
    let categoriesJson  = await res.json();
    categoriesJson = categoriesJson.response;

    let PageSize = 5;
    let PageIndex = 1;
    let urlList = process.env.NEXT_PUBLIC_PRODUCTION_BASE_URL + 'posts';
    urlList += '?PageSize=' + PageSize  + '&PageIndex=' + Number(PageIndex - 1);
    let resList = await fetch(urlList);
    let recentPostsJson = await resList.json(); // 列表信息
    recentPostsJson = recentPostsJson.response; // 列表信息


    this.setState({
      recentPosts: recentPostsJson,
      categories: categoriesJson,
    });
    // if (document.hidden !== undefined) {
    //   document.addEventListener('visibilitychange', (a) => {
    //     if(document.hidden) {
    //       document.title = 'pornhub影片播放中【18禁】'
    //
    //     } else {
    //       document.title = '贤者模式'
    //     }
    //   })
    // }
    Router.events.on('routeChangeComplete', (url) => {
      gtag.pageview(url);
    });
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
        <MenuContext.Provider 
          value={
            {
              categories: this.state.categories,
              recentPosts: this.state.recentPosts
            }
          }>
          <Component {...pageProps} />
        </MenuContext.Provider>
      )
  }
}

export default MyApp;
