import React, { useState, useEffect} from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import commonListStyles from './index.module.css';
import fetch from "isomorphic-unfetch";

const CommonList = (props) => {
  const router = useRouter();
  const [lists, setLists] = useState(props.lists);

  let needPaginator = false;
  let pInfo = {
    'PageSize': -1,
    'pageTotal': -1,
    'categoryEngName': ''
  };
  // 需分页
  if (props.pageInfo) {
    pInfo = props.pageInfo;
    needPaginator = true; //需要分页
  }
  const [PageSize, setPageSize] = useState(pInfo.PageSize);
  const [pageTotal, setpageTotal] = useState(pInfo.pageTotal);
  const [categoryEngName, setCategoryEngName] = useState(pInfo.categoryEngName);
  const [initPageIndex, setInitPageIndex] = useState(0);


  useEffect(() => {
    if(needPaginator) {
      getPosts();
      const handleRouteChange = (url) => {
        if(url.indexOf('category') != -1) {
          let categoryEngName = url.replace('/category/','');
          setCategoryEngName(categoryEngName);
          setInitPageIndex(0);
        }
      };

      router.events.on('routeChangeStart', handleRouteChange);

      // If the component is unmounted, unsubscribe
      // from the event with the `off` method:
      return () => {
        router.events.off('routeChangeStart', handleRouteChange);
      }
    }
  }, [categoryEngName]);

  useEffect(() => {
    if(needPaginator) {
      getPosts();
    }
  }, [initPageIndex]);

  // 分页点击
  const getPage = (flag) => {
    setInitPageIndex(Number(initPageIndex) + Number(flag));
  };


  // 获取列表
  const getPosts = async () => {
    let url = process.env.NEXT_PUBLIC_PRODUCTION_BASE_URL + 'posts';
    url += '?PageSize=' + PageSize + '&PageIndex=' + initPageIndex + '&CategoryName=' + categoryEngName;
    const res = await fetch(url);
    const json = await res.json();
    let pageTotal = Math.ceil(json.totalSize / PageSize);
    setpageTotal(pageTotal);
    setLists(json.response);
  };


  return (
    <div className = {commonListStyles.list }>
      {
        lists.length === 0 ?
          (<div className = {'noData'}>暂无数据</div>) :
          lists && lists.map(item => {
            return (
              <div key={item.id} className={commonListStyles.postItem} >
                <Link href={'/post/[id]'} as={'/post/' + item.id}>
                  <p className={commonListStyles.title}
                  >{item.title}</p>
                </Link>
                <p className = {commonListStyles.publish }>
                  <span className = {commonListStyles.publishTime}>  发布于  {item.create_at.split('T')[0].replace(/\-/g, '/')}</span>
                </p>
              </div>
            )
          })
      }
      {
        lists.length > 0 ?
          <div className={'paginator'}>
            {
              initPageIndex > 0 ?
                <span className={'prev center'} onClick={() => {getPage(-1)}}>上一页</span>
                :null
            }
            {
              initPageIndex <= pageTotal - 2  ?
                <span className={'next center'} onClick={() => {getPage(1)}}>下一页</span>
                :null
            }
          </div>
          :null
      }
    </div>
  );
};

export default CommonList;
