<template>
<!-- <div id="toTop" @click="goTop">
    <Icon type="arrow-up-c" size="30" color="#fff"></Icon>
</div> -->
 <mu-back-top :height="1" :bottom="62" :right="9" :duration="1000" :callBack="backTopCallBack">
    <!-- <mu-raised-button label="" class="totop" primary/> -->
    <img src="//st.360buyimg.com/item/images/2014/ware/scroll-to-top-icon.png?v=jd20170721001814" style="width: 100%;">
  </mu-back-top>
</template>
<script>
export default {
   methods: {
    backTopCallBack () {
    }
  }
}
</script>
<style lang="less">
.mu-back-up{width: 38px;height: 38px; display: block;
    img{width: 100%}
}
</style>
