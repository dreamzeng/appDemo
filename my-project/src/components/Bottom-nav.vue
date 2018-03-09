<template lang="html">
        <div class="foot-container">
        <ul>
          <li><router-link to="/" class="navItems" exact><i class='icon icon_job'></i><em>首页</em></router-link></li>
          <li><router-link to="/read" class="navItems"  ><i class='icon icon_read' ></i><em>阅读</em></router-link></li>
          <li><router-link to="/circle" class="navItems"><i class='icon icon_circle'></i><em>圈子</em></router-link></li>
          <li><router-link to="/my" class="navItems"><i class='icon icon_order'></i><em>我的</em></router-link></li>
        
</ul>
      </div>
</template>

<script>
export default {
  data(){
    return{
      theme:'dark'
    }
  },
  methods:{
  }
}
</script>

<style lang="less"> 
 .foot-container {position: fixed;height: 50px;z-index: 28;bottom: 0;left: 0;width: 100%;
    overflow: hidden;background-color: #fff;box-shadow: 0 0 10px 0 rgba(155,143,143,0.6);
    -webkit-box-shadow: 0 0 10px 0 rgba(155,143,143,0.6);-moz-box-shadow: 0 0 10px 0 rgba(155,143,143,0.6);
    ul{ height: 100%;position: relative;background-color: #fff; height: 50px;
      .navItems{text-align: center;float: left;height: 100%;width: 25%;
      a{display: block;}
      i{display: block;width: 22px;height: 22px; margin: 4px auto 4px auto;}
      .icon_job{ background: url(../assets/img/icon_job.png) center center no-repeat; background-size: contain;}
      .icon_read{background: url(../assets/img/icon_read.png) center center no-repeat; background-size: contain;}
      .icon_circle{background: url(../assets/img/icon_circle.png) center center no-repeat; background-size: contain;}
      .icon_order{background: url(../assets/img/icon_order.png) center center no-repeat; background-size: contain;}
       
      }
      .router-link-active{
         .icon_job{background: url(../assets/img/icon_hjob.png) center center no-repeat; background-size: contain;}
         .icon_read{background: url(../assets/img/icon_hread.png) center center no-repeat;  background-size: contain;}
         .icon_circle{background: url(../assets/img/icon_hcircle.png) center center no-repeat;  background-size: contain;}
         .icon_order{background: url(../assets/img/icon_horder.png) center center no-repeat;  background-size: contain;}
       }
    }
  }
</style>
