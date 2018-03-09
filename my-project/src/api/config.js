// var base = 'http://192.168.10.217:7080';
// var urlConfig = {
// 	       LawyerList:  base + '/user/goods-lawyer-list',
//            SearchList:  base + '/lawyer/explore-article-list',
//         ArticleDetail:  base + '/lawyer/explore-article-detail',
//            UploadFile:  base + '/lawyer/upload-file',
//           ArticleList:  base + '/lawyer/find-article-list'
// }
// module.exports = urlConfig
import axios from '@/utils/axios';

export function LoginByUser(loginName, password) {
  // const data = {
  //   loginName,
  //   password
  // };
  return axios({
    url: '/lawyer/login',
    method: 'post',
    params:{
      user:loginName,
      pwd:password
    }
  });
}

export function logout() {
  return axios({
    url: '/user/logout',
    method: 'post'
  });
}

export function getInfo(token) {
  return axios({
    url: '/user/info',
    method: 'get',
    params: { token }
  });
}

export function getReadList(page) {
  return axios({
    url: '/lawyer/read-index-new',
    method: 'get',
    params: { page:page,limit:10 }
  });
}

export function serviceList() {
  return axios({
    url: '/lawyer/read-index-new',
    method: 'get',
    params: { page:page,limit:10 }
  });
}