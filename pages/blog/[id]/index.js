import React from 'react';

import styles from '../index.module.css'
import fetch from "isomorphic-unfetch";
import Router, {useRouter} from "next/router";
import Layout from '../../../components/layout'

const BlogDetail = ({categoriesJson,recentJson,postJson}) => {
  if(!postJson) {
    return <div>无</div>
  }

  const router = useRouter();

  const jumpToHome = () => {
    const path = '/blog';
    router.push({
      pathname: path,
    })
  };

  const jumpUrl = (EngName) => {
    const path = '/blog';

    const query = router.query;
    // query.cate = EngName;
    router.push({
      pathname: path,
      query: {
        cate: EngName
      },
    })
  };

  const jumpPostUrl = (id) => {
    const path = '/blog/'  + id;
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
          <header>
            <h2>{postJson.title}</h2>
          </header>
          <div className={'content'} dangerouslySetInnerHTML={{__html: postJson.content}}>

          </div>
          <footer>
            Published at {postJson.create_at.split('T')[0].replace(/\-/g, '/')},
            in &nbsp;
            <span
              onClick={() => jumpUrl(postJson.category.EngName)}
            >
            {postJson.category.name}
            </span>
          </footer>
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
              margin: 20px 0;
            }
            
            .content {
              margin: 1.5em 0 1.5em;
              font-size: 14px;
              font-family: Helvetica Neue,Helvetica,Arial,Microsoft YaHei,STHeiti,sans-serif;
              line-height: 1.9em;
            }
            
            .content p{
              margin: 1.2em 0 0;
              font-size: 14px;
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

export default BlogDetail;

BlogDetail.getInitialProps = async ({req, query}) => {

  let id = query.id;
  let postUrl = process.env.NEXT_PUBLIC_PRODUCTION_BASE_URL + 'post/guid/'+id;
  const postRes = await fetch(postUrl);
  const postJson = await postRes.json();

  let url = process.env.NEXT_PUBLIC_PRODUCTION_BASE_URL + 'blog/categories';
  const res = await fetch(url);
  const json = await res.json();

  let recentUrl = process.env.NEXT_PUBLIC_PRODUCTION_BASE_URL + 'blog/recent';
  const recentRes = await fetch(recentUrl);
  const recentJson = await recentRes.json();
  return {
    categoriesJson: json.response,
    recentJson: recentJson.response,
    postJson: postJson.response
  };
};
