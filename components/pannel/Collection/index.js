import React, { Component } from 'react';
import styles from './index.module.css';
import {sites} from '../../../config/website.config'

export default class Collection extends Component{
  constructor() {
    super();
  }

  componentDidMount() {

  }

  goSite(url) {
    let tempWindow = window.open('_blank');
    tempWindow.location = url;
  }

  render() {
    return (
      <div className={styles.siteWrap}>
        {sites.map((site) => {
          return (
            <span
              key={site.name}
              onClick={ () => this.goSite(site.url)}
              className={styles.site}>
                  {site.name}
                </span>
          )
        })}
      </div>
    );
  }
}


