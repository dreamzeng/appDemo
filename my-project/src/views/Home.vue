<template>
  <div class="home">
     <header-bar>
       <h2 slot="home" class="tit" >{{ msg }}</h2>
     </header-bar>    
     <swiper></swiper>
     <tools></tools>
     <div class="hotnews clearfix">
       <h2 class="hotnews_tit"><span>更多></span>热门资讯</h2>
       <div class="hotnews_list">
         <ul>
           <li><a href="">  
             <div class="hotnews_left">
             <p>十九大报告|"深化司法体制综合配套改革"(附：党的历次报告司改表述)</p>
             <p class="hotnews_desc"><span class="desc_day">8天前</span><span>239</span></p>
             </div>
             <div class="hotnews_right"><img src=""></div>
           </a></li>
             <li><a href="">  
             <div class="hotnews_left">
             <p>十九大报告|"深化司法体制综合配套改革"(附：党的历次报告司改表述)</p>
             <p class="hotnews_desc"><span class="desc_day">8天前</span><span>239</span></p>
             </div>
             <div class="hotnews_right"><img src=""></div>
           </a></li>
             <li><a href="">  
             <div class="hotnews_left">
             <p>十九大报告|"深化司法体制综合配套改革"(附：党的历次报告司改表述)</p>
             <p class="hotnews_desc"><span class="desc_day">8天前</span><span>239</span></p>
             </div>
             <div class="hotnews_right"><img src=""></div>
           </a></li>
             <li><a href="">  
             <div class="hotnews_left">
             <p>十九大报告|"深化司法体制综合配套改革"(附：党的历次报告司改表述)</p>
             <p class="hotnews_desc"><span class="desc_day">8天前</span><span>239</span></p>
             </div>
             <div class="hotnews_right"><img src=""></div>
           </a></li>
             <li><a href="">  
             <div class="hotnews_left">
             <p>十九大报告|"深化司法体制综合配套改革"(附：党的历次报告司改表述)</p>
             <p class="hotnews_desc"><span class="desc_day">8天前</span><span>239</span></p>
             </div>
             <div class="hotnews_right"><img src=""></div>
           </a></li>
         </ul>
       </div>
     </div>
     <bottom-nav></bottom-nav>
     <to-top></to-top>
  </div>
</template>

<script>
import headerBar from '@/components/Header-bar.vue'
import bottomNav from '@/components/Bottom-nav.vue'
import tools from '@/components/Tools.vue'
import swiper from '@/components/swiper.vue'
import toTop from '@/components/To-top.vue'
// import {APIdata,urlConfig} from '@/utils/config'

export default {
  name: 'home',
  data () {
    return {
      msg: '法义律师平台',
      demolist:[],
      swiperOption: {
          autoplay: 3500,
          setWrapperSize :true,
          pagination : '.swiper-pagination',
          paginationClickable :true,
          mousewheelControl : true,
          observeParents:true
        },
      swiperSlides: ['https://images.simpletour.com/simpletour/images/wechat_banner/45354e74a7dfda4177e081fbb188fc11.jpg!wechatQ3640160','https://images.simpletour.com/simpletour/images/wechat_banner/2a6a4af6412f37f7e0bcf0aebe834b2c.jpg!wechatQ3640160', 'https://images.simpletour.com/simpletour/images/wechat_banner/3d2a83f6692726dc1b87cf975fba6f57.jpg!wechatQ3640160']
    }
  },
  created(){
    //初始化获取类别数据
    this.allorder();
  },
  mounted(){  
            //这边就可以使用swiper这个对象去使用swiper官网中的那些方法  
            // this.swiper.slideTo(0, 0, false);  
   },
  methods:{
    allorder:function(){
         var _this = this;
         var params = {goodsId:2};
       //   APIdata.startAjax.get(urlConfig.LawyerList,params,function(res){
       //     console.log(res);
       //     if(res.code==1){
       //        _this.demolist = res.data;
       //     }
       // })

    }
  },
  components: {
        swiper,  
        headerBar,
        bottomNav,
        tools,
        toTop

  }
}
</script>
<style lang="less">
// @import '../assets/css/reset.css';
// @import "../assets/css/transtion.less";
// @import '../assets/css/sprite.css';
.home{
  .tit{height:39px; line-height:39px;z-index: 10;width: 100%;
    position: fixed;top: 0px;background: #fff;color: #333}
}
.hotnews{ background: #fff; border-top: 0.025rem solid #e4e4e4;
  .hotnews_tit{text-align: left;padding-left: 1rem; line-height: 40px;color: #333;
     span{float: right;margin-right:1rem;font-size:.58rem;color: #999}
   }
  .hotnews_list{margin-bottom: 2.5rem;
    li{position: relative;overflow: hidden;padding-bottom:.5rem;margin:0rem .5rem;
       a{display: -webkit-box;display: -webkit-flex;display: -ms-flexbox; display: flex;}
      .hotnews_left{ padding: .35rem 1rem 0rem 0rem;-webkit-box-flex: 1;-webkit-flex: auto;
        -ms-flex: auto;flex: auto;
         p{width: 100%;margin-top:.5rem;text-align:left;color: #404040;}
         p.hotnews_desc{ color: #999;
           .desc_day{float: right;}
         }
       }
      .hotnews_right{margin:0px;padding-top: .75rem;
         img{width: 4rem;height: 3.1rem;}
       }
       &::after{position: absolute;bottom: 0;left: 0;height: 1px;width: 100%;content: '';-webkit-transform: scaleY(.5);
        transform: scaley(.5);box-sizing: border-box;background-color: #e4e4e4;
       }
    }
   }
  }
</style>
