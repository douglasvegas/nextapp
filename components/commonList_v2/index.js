import React, { useState, useEffect }  from 'react';
import Link from 'next/link';
import Router, { useRouter } from 'next/router';
import commonListStyles from './index.module.css';
import ReactPaginate from 'react-paginate';

const CommonList = (props) => {
  const router = useRouter();
  let lists = props.lists;

  const stopLoading = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  useEffect(() => {
    Router.events.on('routeChangeComplete', stopLoading);

    return () => {
      Router.events.off('routeChangeComplete', stopLoading);
    }
  }, [])

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

  return (
    <div className = {commonListStyles.list }>
      {
        lists.length === 0 ?
          (<div className = {'noData'}>暂无数据</div>) :
          lists && lists.map(item => {
            return (
              <div key={item.id} className={commonListStyles.postItem} >
                <Link href={'/post_v2/[id]'} as={'/post_v2/' + item.Guid}>
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
        (props.pageInfo && lists.length > 0)?
          <ReactPaginate
            previousLabel={'previous'}
            nextLabel={'next'}
            breakLabel={'...'}
            breakClassName={'break-me'}
            activeClassName={'active'}
            containerClassName={'pagination'}
            subContainerClassName={'pages pagination'}

            initialPage={Number(props.pageInfo.PageIndex) -1}
            pageCount={props.pageInfo.pageTotal} //page count
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={pagginationHandler}
          />
          :null
      }
    </div>
  );
};

export default CommonList;
