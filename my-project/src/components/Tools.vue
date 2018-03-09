<template lang="html">
        <div class="tools_box">
        <ul>
           <!-- <li v-for="item in list"><a :href='item.href'><img :src='item.img'><em>{{item.name}}</em></a></li> -->
           <li><a href=""><img src="../assets/img/icon_comput.png"><em>计算工具</em></a></li>
           <li><a href=""><img src="../assets/img/icon_case.png"><em>案例检索</em></a></li>
           <li><a href=""><img src="../assets/img/icon_iphone.png"><em>司法通讯录</em></a></li>
           <li><a href=""><img src="../assets/img/icon_check.png"><em>法规检索</em></a></li>
           <li><a href=""><img src="../assets/img/icon_user.png"><em>用户咨询</em></a></li>
           <li><a href=""><img src="../assets/img/icon_bid.png"><em>用户竞标</em></a></li>
           <li><a href=""><img src="../assets/img/icon_manage.png"><em>案件管理</em></a></li>
           <li><a href=""><img src="../assets/img/icon_book.png"><em>文书下载</em></a></li>
       </ul>
      </div>
</template>

<script>
export default {
   data(){
    return{ 
       list:[{
          href: 'www.baidu.com',
          img: './assets/img/icon_comput.png',
          name: '计算工具'
         },{
          href: '',
          img: './assets/img/icon_case.png',
          name: '案例检索'
         },{
          href: '',
          img: './assets/img/icon_iphone.png',
          name: '司法通讯录'
         },{
          href: '',
          img: './assets/img/icon_check.png',
          name: '法规检索'
        }]
       }
    },
}
</script>

<style lang="less" scoped>
.tools_box{position: relative;padding: .5rem 0rem .5rem;margin: .5rem 0rem;background: #fff;border-top: 0.025rem solid #e4e4e4;border-bottom: 0.025rem solid #e4e4e4;
  h2{text-align: left; padding-left: .5rem;}
  ul{display: flex;flex-wrap:wrap;
    li{float: left; width: 25%;text-align: center;
      a{padding:1rem;color: #333}
      img{display: block;width: 29px;height: 29px; margin: 0 auto 10px auto;}
      em{height: 1rem;line-height: 1rem;  overflow: hidden; display: -webkit-box;-webkit-line-clamp: 1;-webkit-box-orient: vertical;}
    }
  }
}
</style>
