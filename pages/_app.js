import React from 'react';
import App from 'next/app';
import MenuContext from "../components/MenuContext";
import './_app.css'
import Router from "next/router";
import * as gtag from '../lib/gtag'

class MyApp extends App {
  state = {
    categories: null
  };

  async componentDidMount() {
    let url = process.env.NEXT_PUBLIC_PRODUCTION_BASE_URL + 'categories';
    const res = await fetch(url);
    const json = await res.json();
    this.setState({
      categories: json.response
    });
    if (document.hidden !== undefined) {
      document.addEventListener('visibilitychange', (a) => {
        if(document.hidden) {
          document.title = 'pornhub影片播放中【18禁】'

        } else {
          document.title = '贤者模式'
        }
      })
    }

    Router.events.on('routeChangeComplete', (url) => {
      gtag.pageview(url);
    });

  }

  handleClick() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
        <MenuContext.Provider value={{categories: this.state.categories}}>
          <Component {...pageProps} />
          <div className={'toTop'}
            onClick={this.handleClick.bind(this)}
          >Top</div>
        </MenuContext.Provider>
      )

  }
}

export default MyApp;
