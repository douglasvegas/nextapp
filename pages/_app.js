import React from 'react';
import App from 'next/app';
import MenuContext from "../components/MenuContext";

class MyApp extends App {
  state = {
    json: null
  };

  async componentDidMount() {
    let url = process.env.NEXT_PUBLIC_PRODUCTION_BASE_URL + 'categories';
    const res = await fetch(url);
    const json = await res.json();
    this.setState({
      json: json.response
    });
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
        <MenuContext.Provider value={{json: this.state.json}}>
          <Component {...pageProps} />
        </MenuContext.Provider>
      )

  }
}

export default MyApp;
