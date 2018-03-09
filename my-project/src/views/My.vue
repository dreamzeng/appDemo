<template>
  <div class="my">
 <!--      <header-bar>
       <h2 slot="home" class="tit" >{{ msg }}</h2>
     </header-bar> -->

           <div class="userBg">
          <div class="userHead">
        <!--     <img src="./../assets/img/head.jpg" v-if="!this.$store.state.logined"> -->

            <img :src="this.$store.state.headImg" v-if="this.$store.state.headImg">
            <img src="./../assets/img/head.jpg" v-else="!this.$store.state.headImg">
            <div class="userName">
              {{this.$store.state.drawerUsername}}
              <!-- {{this.$store.state.drawerUsername}} -->
            </div>

            <router-link to="/editprofile">
            <mu-flat-button icon="mode_edit" label="编辑资料" class="demo-raised-button detailUserInfo" backgroundColor="rgba(0,0,0,0.2)"/>
            </router-link>
          </div>
        </div>
    <ul class="midBar" style="display:none">
        <li is="router-link" class="fl collect isLi" to="/my">
            <Icon type="cube" size="24" color="#f69e32"></Icon><br> 余额
        </li>
        <li is="router-link" class="fl history isLi" to="/my">
            <Icon type="ios-timer-outline" size="24" color="#658cf5"></Icon><br> 未到账
        </li>
    </ul>
   <div class="manage_list">
    <ul>
       <li class="tipItems"><a href="https://github.com/hcy1996/vue-toutiao" target=_blank>
       <i class="el-icon-view"></i>我的钱包<i class="el-icon-arrow-right"></i>
       </a></li>
     </ul>
     <ul>
       <li class="tipItems"><a href="https://github.com/hcy1996/vue-toutiao" target=_blank>
       <i class="el-icon-document"></i>我的订单<i class="el-icon-arrow-right"></i>
       </a></li>
       <li class="tipItems"> <router-link to="/my" >
        <i class="el-icon-date"></i>我的服务<i class="el-icon-arrow-right"></i>
       </router-link></li>
       <li class="tipItems"><a href="https://github.com/hcy1996/vue-toutiao" target=_blank>
       <i class="el-icon-time"></i>我的收藏<i class="el-icon-arrow-right"></i>
       </a></li>
      
     </ul>
        <ul>
       <li class="tipItems"><a href="https://github.com/hcy1996/vue-toutiao" target=_blank>
       <i class="el-icon-warning"></i>吐槽我们<i class="el-icon-arrow-right"></i></a></li>  
     </ul>
     <ul>
          <li class="tipItems log_off"  @click="logOff" v-show="logined"><i class="el-icon-warning"></i>退出登录</li> 
     </ul>
   </div>
     <bottom-nav></bottom-nav>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
import headerBar from '../components/Header-bar.vue'
import bottomNav from '../components/Bottom-nav.vue'
// import toTop from '@/components/To-top.vue'
export default {
  name: 'home',
  components: {
        headerBar,
        bottomNav,
  },
  data () {
    return {
      msg: '个人中心',
      logined:true
    }
  },
  methods: {
        ...mapActions(['logOut']),
        logOff() {
            let data = {
            logined:false,
            headImg: ''
          }
          this.logOut(data);
          this.$router.push('/');
          window.location.reload();

        }

  }
}
</script>

<style  lang="less">
// @import '../assets/css/reset.css';
// @import '../assets/css/sprite.css';
.my{
   .userBg{
    position: relative;
    width: 100%;
    height: 200px;
    background: #fff;
    border-bottom:0.025rem solid #e4e4e4
  }
  .userHead{
    position: absolute;
    width: 100%;
    height: 80px;
    margin-top: 8%;
    text-align: center;
  }
  .userHead img{
    display:block;
    margin: 0 auto;
    width: 80px;
    height: 80px;
    border-radius: 100px;
    border: 2px solid #fff;
  }
  .userName{
    position: relative;
    padding: 10px;
    color: #333;
    font-size: .84rem;
  }
  .detailUserInfo{
    width: 120px;
    height: 30px;
    line-height: 30px;
    border-radius: 20px;
    color: #fff;
  }
.midBar {
    height: 1.6rem;
    position: relative;
    .isLi {
        width: 50%;
        text-align: center;
        margin-top: 0.2rem;
        box-sizing: border-box;
        font-size: 13px;
        color: #000;
    }
    .collect {
        position: relative;
        display: block;
        &::after {
            content: "";
            box-sizing: border-box;
            position: absolute;
            height: 100%;
            right: 0;
            top: 0;
            border-right: 1px solid #bbb;
            @media screen and (-webkit-min-device-pixel-ratio: 3) {
                transform: scaleY(0.33333);
            }
            @media screen and (-webkit-min-device-pixel-ratio: 2) {
                transform: scaleY(0.5);
            }
        }
    }
}
.manage_list{padding-bottom: 4rem;
  ul{margin-top: .5rem;  border-top:0.025rem solid #e4e4e4;border-bottom: 0.025rem solid #e4e4e4;}
  ul:nth-child(2) li {
    a{height:1.7rem;border-bottom: 1px solid #e5e5e5;}
  } 
  ul:nth-child(2) li:nth-child(3){
    a{border-bottom: none;}
  }
// li.tipItems:nth-child(1){margin-top: 0px}
.tipItems {
    position: relative;
    display: block;
    height: 40px;
    width: 100%;
    color: #333;
    line-height: 40px;
    font-weight: bold;
    position: relative;
    padding-left: 1rem;
    text-align: left;
    background: #fff;
    a{display: block;color: #666;font-weight: normal;}
    i{margin-right: .5rem}
    i.el-icon-arrow-right{position: absolute;right: .5rem;top:.5rem}
    .toSetup{
        margin-right: .3rem;
        margin-top: .2rem;
    }
 }
 // .log_off{text-align: center;border-top:1px solid #d43d3d;border-bottom:1px solid #d43d3d;color: #d43d3d}
 }
}
</style>
