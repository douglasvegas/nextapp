import React, { useContext } from 'react';
import Link from 'next/link';
import Layout from '../layout';
import MenuContext from '../MenuContext';
import Head from 'next/head';
import styles from './index.module.css';

const Header = () => {
  const {json} = useContext(MenuContext);
  function seeAll(flag) {
    if (flag == 0) {
      console.log('show');
      document.querySelector('.allCategories').style.display = 'block';
    }
    else if (flag == 1){
      document.querySelector('.allCategories').style.display = 'none';
    }

  }
    return (
      <Layout>
        <Head>
          <meta name='viewport' content='width=device-width, initial-scale=1.0' />
          <title>Think before you speak. Read before you think.｜Jarvis Sun</title>
          <link rel='icon' href='/favicon.ico' type='image/x-icon' />
        </Head>
        {/*<Head>*/}
        {/*  <script data-ad-client='ca-pub-9856877633666184' async src='https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js'></script>*/}
        {/*</Head>*/}
        <div className={styles.headerWrap}>
        <nav className={styles.categoryNav}>
          <Link href={'/' } as={'/'} key={'icon'}>
            <img src='/aiglabhome.svg' alt='' with='100px' height='100px' className={styles.homesvg} />
          </Link>

          <ul>
            {
              (json&& json.length>0) && json.map(item => {
                if (item.StateFlag == 3) {
                  return (
                    <Link href={'/category/[name]' } as={'/category/'+ item.EngName} key={item.id}>
                      <li onClick={() => seeAll(1)}>{item.name}</li>
                    </Link>
                  )
                }
                return null
              })
            }
            {
              (json&& json.length>0) ?
                <li key={'all'} className={styles.seeAll} onClick={() => seeAll(0)} onMouseEnter={() => seeAll(0)} >{'其他'}</li>
                : null
            }
          </ul>
          <div className={'allCategories'} onMouseLeave={() => seeAll(1)}>
            {
              (json&& json.length>0) && json.map( item => {
                if (item.StateFlag == 2) {
                  return (
                    <Link href={'/category/[name]' } as={'/category/'+ item.EngName }   key={item.id}>
                      <div className={styles.categoryItem} onClick={() => seeAll(1)}>{item.name}</div>
                    </Link>
                  )
                }
                return null
              })
            }
            <div className={styles.closeBtn}></div>
            <span className={styles.closeBtn} onClick={() => seeAll(1)}>close</span>
          </div>
        </nav>
        <div className= {styles.topTip} ></div>
        </div>

        <style jsx>
          {`
          
            ul {
              display:flex;
              flex-direction: row;
              margin: 0;
              padding: 0;
              width: 50%;
              padding: 10px 0;
              margin-left: 25%;
            }
            ul li {
              list-style: none;
              flex:1;
              text-align: center;
              cursor: pointer;
              font-size: 18px;
              color: #F037A5 !important;
              font-weight: 900;
            }
            ul li:hover {
              opacity: .7;
            }

            .allCategories {
              display: none;
              position: absolute;
              top: 60px;
              width: 30%;
              right: 20%;
              height: auto;
              background: #CDF564;
              padding: 20px;
              border-radius: 6px;
            }
            
          `}
        </style>
      </Layout>
    )
};

export  default  Header;
