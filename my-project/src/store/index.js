import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import axios from 'axios'
import jsonp from 'jsonp'


export const CHANGEINTRODUCE = 'CHANGEINTRODUCE';

export const DRAWER_USERNAME = 'DRAWER_USERNAME';

export const HEAD_IMG = 'HEAD_IMG';

export const LOGINING = 'LOGINING';

export const LOG_OUT = 'LOG_OUT';


export const GET_NEWSLIST = 'GET_NEWSLIST'

export const CHANGE_LOADING_STATE = 'CHANGE_LOADING_STATE'

export const RELOAD = 'RELOAD'

export const RETURN = 'RETURN'

export const ROUTERCHANGE = 'ROUTERCHANGE'


// 对于vuex的用法，其实理解了流程就行
// vuex -> actions -> 提交（commit）mutations ->state -> view -> dispatch 触发 actions ->...
// actions 其实是mutations的升级版，它实现了mutations只能同步改变状态不能异步改变
// actions 就是可以异步操作mutation的提交
const state = {
  loading: true, 
  //新闻列表切换时loading图片的展示
  ifReturnMsg: '',
  //是否有数据返回
  routerChange:true,   
  //路由变化
  tranform: true,
  //loading动画
  drawerUsername:JSON.parse(localStorage.getItem('drawerUsername')) || {},
  //登录token
  logined: JSON.parse(localStorage.getItem('loginStatus')) || false, 
  //登录头像
  headImg:'',
  //个人介绍
  introduce:'',
  list: {                //首页所有新闻栏目内容
        __all__: [],
        news_hot: [],
        news_society: [],
        news_entertainment: [],
        news_tech: [],
        news_car: [],
        news_sports: [],
        news_finance: [],
        news_military: [],
        news_world: [],
        news_fashion: []
    }
}

const mutations = {
  //将首页发送的请求数据添加到list各项中去，进行渲染页面
  [GET_NEWSLIST](state, payload) {
      for (var item in payload.data) {
          state.list[payload.kind].push(payload.data[item]);
      }
      state.downLoadMore = true;
  },
  //新闻切换时loading图片的展示
  [CHANGE_LOADING_STATE](state, flag) {
      state.loading = flag;
  },
   //判断路有变化
  [ROUTERCHANGE](state, sign){
        state.routerChange = sign;
  },
  //判断是否有请求数据返回
  [RETURN](state, flag) {
        state.ifReturnMsg = flag;
  },
  //设置侧滑栏用户名
  [DRAWER_USERNAME](state,payload){
    state.drawerUsername = payload.drawerUsername;
  },
  //设置侧滑栏头像
  [HEAD_IMG](state,payload){
    state.headImg = payload.headImg;
  },
  //注销
  [LOG_OUT](state,payload){
    state.logined = payload.logined;
    state.drawerUsername = payload.drawerUsername;
    state.headImg = payload.headImg;
  },
  //登录token
  [LOGINING](state, payload){
        state.logined = payload.logined;
    },
  //更改个人简介
  [CHANGEINTRODUCE](state, payload){
        state.introduce = payload.introduce;
        state.hasIntroduce = true;
    }
}

const actions = {
  getNews({            //首页的数据请求
        commit,
        state
    }, pay) {
        if (pay.kind && pay.flag) {
            jsonp('http://m.toutiao.com/list/?tag=' + pay.kind + '&ac=wap&count=20&format=json_raw&as=A125A8CEDCF8987&cp=58EC18F948F79E1&min_behot_time=' + parseInt((new Date().getTime()) / 1000),
                function(err, res) {
                    commit(GET_NEWSLIST, {
                        data: res.data,
                        kind: pay.kind
                    });
                    console.log('****res****',res.data);
                    commit(CHANGE_LOADING_STATE, false);
                    if (res.return_count) {
                        commit(RETURN, true);
                    } else {
                        commit(RETURN, false);
                    }
                })
        }
    },
  //侧滑栏已登录用户名
  loginUsername({ commit}, data) {
    localStorage.setItem('drawerUsername', JSON.stringify(data));
    commit(DRAWER_USERNAME,{drawerUsername:data});
  },
  //侧滑栏已登录已登录头像
  setHeadImg({ commit }, data) {
    commit(
      HEAD_IMG,
      {
        headImg:data
      });
  },
  //是否登录
  logined({ commit }, data) {
    localStorage.setItem('logined', data);
     commit(LOGINING,{logined:data});
  },
  //注销
  logOut({ commit }, data) {
    localStorage.removeItem('logined'); 
    localStorage.removeItem('drawerUsername'); 
    commit(
      LOG_OUT,
      {
        logined: data.logined,
        drawerUsername: data.drawerUsername,
        headImg: data.headImg
      });
  }

}

const getters = {
  newsList: state => state.newsList,
  loading: state => state.loading,
  list: state => state.list,
  ifReturnMsg: state => state.ifReturnMsg,
  routerChange: state => state.routerChange,
  logined: state => state.logined,
  drawerUsername: state => state.drawerUsername,
  headImg: state => state.headImg,
};
export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
