import React, { useState, useEffect }  from 'react';
import styles from './index.module.css'
import fetch from "isomorphic-unfetch";
import BlogDetail from "./[id]";
import Router, {useRouter} from "next/router";
import ReactPaginate from 'react-paginate';
import Layout from '../../components/layout'

const Blog = ({categoriesJson,recentJson,postsJson,pageInfo}) => {
  const router = useRouter();
  let lists = postsJson;

  const stopLoading = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  useEffect(() => {
    Router.events.on('routeChangeComplete', stopLoading);

    return () => {
      Router.events.off('routeChangeComplete', stopLoading);
    }
  }, []);

  /***
   * 分页
   */
  const pagginationHandler = (page) => {
    const path = router.pathname;
    const query = router.query;
    query.p = page.selected + 1;

    router.push({
      pathname: path,
      query: query,
    })
  };

  const jumpToHome = () => {
    const path = '/blog';
    router.push({
      pathname: path,
    })
  };

  const jumpUrl = (EngName) => {
    const path = '/blog';
    const query = router.query;
    query.cate = EngName;
    router.push({
      pathname: path,
      query: query,
    })
  };

  const jumpPostUrl = (id) => {
    const path = router.pathname + '/' + id;
    router.push({
      pathname: path,
    })
  };

  return (
    <Layout>

    <div className={styles.blogWrap}>
      <div className={styles.blog}>
        <div className={styles.leftSide}>
          <img src="/head.svg" alt="" className={styles.avatar}/>
          <h3
            className={styles.title}
            onClick={() => jumpToHome()}
          >
            JarvisSun's Blog;
          </h3>
          <h5 className={styles.description}>该死的台风偏偏选择在每一个的周末</h5>
          <div className={'category'}>
            <h4>Categories</h4>
            <ul>
              {
                categoriesJson && categoriesJson.length > 0 && categoriesJson.map(item => {
                  return (
                    <li key={item.id}
                        className={styles.title}
                        onClick={() => jumpUrl(item.EngName)}
                    >
                      {item.name}
                    </li>
                  )
                })
              }
            </ul>
          </div>
          <div className={'category'}>
            <h4>Recent Posts</h4>
            <ul>
              {
                recentJson && recentJson.length > 0 && recentJson.map(item => {
                  return (
                    <li key={item.ID}
                        className={styles.title}
                        onClick={() => jumpPostUrl(item.Guid)}
                    >
                      {item.Title}
                    </li>
                  )
                })
              }
            </ul>
          </div>
          <div className={'category'}>
            <h4>Links</h4>
            <ul>
              <li>落花流水</li>
              <li>aiglab.com</li>
              <li>Hello World</li>
            </ul>
          </div>
        </div>
        <div className={styles.rightSide}>
          {postsJson && postsJson.length > 0 && postsJson.map(post => {
            return (
              <article>
                <header>
                  <h2
                    className={styles.title}
                    onClick={() => jumpPostUrl(post.Guid)}
                  >
                    {post.title}
                  </h2>
                </header>
                <div className={styles.content} dangerouslySetInnerHTML={{__html: post.content}}>
                </div>
                <footer>
                  Published at {post.create_at.split('T')[0].replace(/\-/g, '/')},
                  in &nbsp;
                  <span
                    onClick={() => jumpUrl(post.category.EngName)}
                  >
                    {post.category.name}
                  </span>
                </footer>
              </article>
            )
          })}
          {
            (pageInfo && lists.length > 0)?
              <ReactPaginate
                previousLabel={'previous'}
                nextLabel={'next'}
                breakLabel={'...'}
                breakClassName={'break-me'}
                activeClassName={'active'}
                containerClassName={'pagination'}
                subContainerClassName={'pages pagination'}

                initialPage={Number(pageInfo.PageIndex) -1}
                pageCount={pageInfo.pageTotal} //page count
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
                onPageChange={pagginationHandler}
              />
              :null
          }
        </div>
      </div>
      <style jsx>{`
           .category {
              display: flex;
              flex-direction: column;
           }   
           
           .category h4 {
                font-size: 15px;
                margin: 20px 0;
            }
            
            .category ul {
                list-style: none;
                padding: 0;
                margin: 0;
            }
            
            .category ul li{
              display: block;
              font-size: 13px;
              line-height: 29px;
              margin: 0;
              padding: 0;
              width: 100%;
              color: #c46969;
            }
            
            header h2 {
              font-size: 22px;
              margin: 0 0 20px 0;
            }
            
            .content {
              margin: 1.5em 0 0;
            }
            
            .content a {
              color: #c46969;
              text-decoration: underline;
            }
            
            article {
                padding: 10px 0;
            }
      
            footer {
              color: #999;
              font-size: 12px;
              margin: 16px 0;
            }
            
            footer a {
              color: #c46969;
              cursor: pointer;
              text-decoration: underline;
            }
            footer span {
              color: #c46969;
              cursor: pointer;
              text-decoration: underline;
            }
      `}
      </style>
    </div>

    </Layout>
  )
};

export default Blog;

Blog.getInitialProps = async ({req, query}) => {
  let cate = query.cate;

  let postsUrl = process.env.NEXT_PUBLIC_PRODUCTION_BASE_URL + 'blog/category/blog';
  if(cate) {
    postsUrl = process.env.NEXT_PUBLIC_PRODUCTION_BASE_URL + 'blog/category/' + cate;
  }
  let PageSize = 20;
  let PageIndex = query.p >= 1 ? query.p : 1;
  postsUrl  = postsUrl + '?PageSize=' + PageSize  + '&PageIndex=' + Number(PageIndex - 1);
  const postsRes = await fetch(postsUrl);
  const postsJson = await postsRes.json();


  let url = process.env.NEXT_PUBLIC_PRODUCTION_BASE_URL + 'blog/categories';
  const res = await fetch(url);
  const json = await res.json();

  let recentUrl = process.env.NEXT_PUBLIC_PRODUCTION_BASE_URL + 'blog/recent';
  const recentRes = await fetch(recentUrl);
  const recentJson = await recentRes.json();


  let pageTotal = Math.ceil(postsJson.totalSize / PageSize);
  let pageInfo = {PageSize, PageIndex, pageTotal}; // 分页信息

  return {
    categoriesJson: json.response,
    recentJson: recentJson.response,
    postsJson: postsJson.response,
    pageInfo
  };
};
