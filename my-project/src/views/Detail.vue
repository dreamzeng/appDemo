<template>
  <div class="newsdetail">
      <headerBar>
        <div slot="detail-header" class="detail-header">
        <i class="fl material-icons back"  @click="$router.go(-1)">arrow_back_ios</i>
            {{msg}}
            </div>
      </headerBar>
      <section class='m_content'>
         <h2 class="detail-title">{{$route.params.title}}</h2>
         <div class="media_name">
            <img src="../assets/img/head.jpg" height="360" width="360" alt="" class="avatar_url">
            <span class="name">{{media_name}}</span><br>
            <span class="date">{{datetime}}</span>
        </div>
        <div class="contentNews">
            {{abstract}}
            <img :src="img.url" alt="" v-for="(img,index) in image_list">
        </div>
     <bottom-nav></bottom-nav>
     <to-top></to-top>
     </section>
  </div>
</template>

<script>
import headerBar from '../components/Header-bar.vue'
import bottomNav from '../components/Bottom-nav.vue'
import toTop from '@/components/To-top.vue'
// import {mapActions,mapGetters} from 'vuex'
// import axios from 'axios'
export default {
  name: 'home',
  components: {
        headerBar,
        bottomNav,
        toTop
  },
  data(){
        return {
            msg:'内容详情',
            media_info:this.$route.params.media_info,
            title:this.$route.params.title
        }
    },
   computed: {
        media_name:function(){
            if(this.$route.params.media_name){
                return this.$route.params.media_name
            }else{
                return ''
            }
        },
        datetime:function(){
            if(this.$route.params.datetime){
                return this.$route.params.datetime
            }else{
                return ''
            }
        },
         abstract:function(){
            if(this.$route.params.abstract){
                return this.$route.params.abstract
            }else{
                return ''
            }
        },
        image_list:function(){
            if(this.$route.params.image_list){
                return this.$route.params.image_list
            }else{
                return ''
            }
        }
    }
}
</script>

<style lang="less">
.newsdetail{
   .detail-header {
        background: #fff;
        font-size: 16px;
        color: #000;
        box-shadow: 0 0 3px #ccc;
        border-bottom:0.025rem solid #e4e4e4;
        .back {
            line-height: 40px;
            padding-left: 1rem;
        }
    }
  .m_content{margin: 1.65rem 0rem 1.5rem; padding:.5rem;background: #fff;
    .detail-title {color: #000;font-size: 20px}
    .media_name {
            position: relative;
            margin-top: 0.5rem;
            .avatar_url {
                height: 1.6rem;
                width: 1.6rem;
                border-radius: 50%;
            }
            .name {
                position: absolute;
                font-weight: bold;
                left: 1.6rem;
                top: 0.1rem;
            }
            .date {
                position: absolute;
                left: 1.6rem;
                top: 0.6rem;
            }
        }
      .contentNews {
            margin-top: 0.5rem;
            font-size: 16px;
            color: #000;
            text-indent: 0.7rem;
            line-height: .8rem;
            img {
                text-align: center;
                display: block;
                width: 70%;
                margin: 0.2rem auto;
            }
        }
  }
}
</style>
