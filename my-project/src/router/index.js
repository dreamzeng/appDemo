import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store/index'
import Vuex from 'vuex'
import Home from '@/views/Home'
import Read from '@/views/Read'
import Detail from '@/views/Detail'
import Circle from '@/views/Circle'
import My from '@/views/My'
import Login from '@/views/Login'
import Editprofile from '@/views/Editprofile'


Vue.use(Router);
const routes = [{
        path: '/',
        component: Home,
        name: 'home'
    },
     {
        path: '/login',
        component: Login,
        name: 'login'
    },
    {
        path: '/read/:kind',
        component: Read,
        name: 'read'
    },
    {
        path: '/newsDetail/:id',
        component: Detail,
        name: 'newsdetail'
    },
    {
        path: '/circle',
        component: Circle,
        name: 'circle'
    },
    {
        path: '/my',
        component: My,
        name: 'my',
        meta: {
        requireAuth: true,// 添加该字段，表示进入这个路由是需要登录的
        keepAlive: true
        }
    },
     {
        path: '/editprofile',
        component: Editprofile,
        name: 'editprofile'
    },
    {
        path: '*',
        redirect: '/read/all?type=__all__'
    },
    {
        path: '',
        redirect: '/read/all?type=__all__'
    }];
const scrollBehavior = (to, from, savedPosition) => {
    if(savedPosition){
        return savedPosition
    }else{
        return { x: 0, y: 0 }
    }
}
const router = new Router({
    mode: 'history',
    hashbang: false,
    routes,
    scrollBehavior
})

/**
 * 登录钩子函数
 * to 即将要进入的目标 路由对象
 * from 当前导航正要离开的路由
 * next 一定要调用该方法来 resolve 这个钩子
 * next() 进行管道中的下一个钩子 如果全部钩子执行完了，则状态就是 confirmed （确认的）
 */
router.beforeEach((to, from, next) => {
  if(to.meta.requireAuth){ // 判断该路由是否需要登录权限
    let login_state = localStorage.getItem('logined');
    if(login_state){ // 通过vuex state获取当前的token是否存在
      next();
    }else{
      next({
        path: '/login',  // 跳转到登录页面
        query: { redirect: to.fullPath }, // 将跳转的路由path作为参数，用于登录成功后回到登录前页面
      });
    }
  }else{
    next();
  }
})

export default router

