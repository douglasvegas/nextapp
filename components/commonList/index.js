import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import commonListStyles from './index.module.css';
import ReactPaginate from 'react-paginate';

const CommonList = (props) => {
  const router = useRouter();
  let lists = props.lists;

  /***
   * 分页
   */
  const pagginationHandler = (page) => {
    const path = router.pathname;
    const query = router.query;
    query.p = page.selected;

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
        props.pageInfo ?
          <ReactPaginate
            previousLabel={'previous'}
            nextLabel={'next'}
            breakLabel={'...'}
            breakClassName={'break-me'}
            activeClassName={'active'}
            containerClassName={'pagination'}
            subContainerClassName={'pages pagination'}

            initialPage={props.pageInfo.PageIndex}
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
