import React, { Component } from 'react';
import styles from './index.module.css';
import { getCate } from '../../../service/index';

export default class Itemize extends Component{
  constructor() {
    super();
    this.state = {
      response: []
    }
  }

  async componentDidMount() {
    let json = await getCate();
    let { response } = json;
    this.setState({
      response
    });
  }

  handleClick(url) {
    window.location.href = `/category/${url}`;
  }

  render() {
    let response = this.state.response;
    return (
      <div className={styles.itemizeWrap}>
        {
          (response && (response.length > 0)) && response.map(res => {
            return (
              <span
                key={res.EngName}
                className={styles.item} onClick={() => this.handleClick(res.EngName)}>
                { res.name }
              </span>
            )
          })
        }
      </div>
    );
  }
}


