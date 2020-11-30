/***
 * 获取接口列表
 */

import fetch from "isomorphic-unfetch";



/**
 * 获取类目
 */
export async function getCate() {
  let urlList = process.env.NEXT_PUBLIC_PRODUCTION_BASE_URL + 'categories';
  let resList = await fetch(urlList);
  let jsonList = await resList.json();
  return jsonList;
}
