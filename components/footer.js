import React, { Component } from "react"


export default class Footer extends Component {
  componentDidMount () {

  }

  render () {
    return (
      <div>
        <div className={'wrap'}>
          <a href="http://beian.miit.gov.cn/">沪ICP备19023642号</a>
        </div>
        <style jsx>
          {`
                  .wrap {
                    background:none;
                    width:100%;
                    height: 20px;
                    line-height:20px;
                    text-align:center;
                    position: relative;
                    margin-bottom: 20px;
                  }
                  a {
                    color: #24292e;
                    text-decoration: none;
                    font-size:12px;
                    margin: 0 auto;
                  }
                `}
        </style>
      </div>

    )
  }
}
