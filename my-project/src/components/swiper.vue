<template>
<div class="swiper">
    <swiper class="swiperTop" :options="swiperOption">
        <swiper-slide class="slide" v-for="slide in swiperSlides" :key="slide.id">
          <div class="slideImg">
            <img :src="slide"/>
          </div>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
</div>
</template>
<script>
export default {
    data () {
    return {
      swiperOption: {
          autoplay: 1500,
          setWrapperSize :true,
          pagination : '.swiper-pagination',
          paginationClickable :true,
          mousewheelControl : true,
          observeParents:true,
        },
      swiperSlides: ['https://images.simpletour.com/simpletour/images/wechat_banner/45354e74a7dfda4177e081fbb188fc11.jpg!wechatQ3640160','https://images.simpletour.com/simpletour/images/wechat_banner/2a6a4af6412f37f7e0bcf0aebe834b2c.jpg!wechatQ3640160', 'https://images.simpletour.com/simpletour/images/wechat_banner/3d2a83f6692726dc1b87cf975fba6f57.jpg!wechatQ3640160']
    }
  },
}
</script>
<style lang="less" scoped>
  .swiper{
    margin-top: 39px;
    position: relative;
  }
  .slide{
    width: 100%;
    height: 150px;
    background: #dedede;
  }
  .slideImg img{
    width:100%;
    height: 150px;
  }
</style>
