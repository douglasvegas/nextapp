import React from 'react'
import Head from 'next/head'
import Layout from '../../components/layout'
// import Nav from '../components/nav'
// import Cowsay from '../components/cowsay'
// import Router from 'next/router'

import Link from 'next/link'

const Home = () => (
    <Layout>
      <div className="bd">
        <Head>
          <title>Think before you speak. Read before you think.｜Jarvis Sun</title>
          <link rel="icon" href="/aiglab.png" />
        </Head>
          <Head>
              <script data-ad-client="ca-pub-9856877633666184" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
          </Head>

        <div className="hero">
            <Link href='/posts' as='/posts'>
                <h1 className="title"><span>{">_"}</span> thinking</h1>
            </Link>
            <img src="/head.svg" alt="" className="person"/>
        </div>
          <style jsx global>
              {`
                      body {
                        margin:0;
                      }
                    `}
          </style>
        <style jsx>{`
            .person {
                max-width: 100%;
                height: auto;
            }
          .bd {
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            left:0;
            background-color: #F037A5;
            display:flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            background: url(/hero-burst-cropped.svg) no-repeat center/1610px 1523px,linear-gradient(#F037A5 -60%,#FAE62D 140%);
            background-color: #F037A5;
          }
          .hero {
            color: #333;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
          }
          .title {
            margin: 0;
            width: 100%;
            font-size: 50px;
            cursor:pointer;
          }
          .title,
          .description {
            text-align: center;
          }
          .title>span {
            font-size: 68px;
            color: white;
          }
          .row {
            max-width: 880px;
            margin: 80px auto 40px;
            display: flex;
            flex-direction: row;
            justify-content: space-around;
          }
          .card {
            padding: 18px 18px 24px;
            width: 220px;
            text-align: left;
            text-decoration: none;
            color: #434343;
            border: 1px solid #9b9b9b;
          }
          .card:hover {
            border-color: #067df7;
          }
          .card h3 {
            margin: 0;
            color: #067df7;
            font-size: 18px;
          }
          .card p {
            margin: 0;
            padding: 12px 0 0;
            font-size: 13px;
            color: #333;
          }
        `}</style>
      </div>
    </Layout>
    )

export default Home
