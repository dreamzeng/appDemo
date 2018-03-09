<template>
  <div class="read">
    <header-bar>
       <h2 slot="read" class="tit">
        <i class="fl back" @click.native="$router.go(-1)"></i>
        <!-- <Icon type="person-add" size="28" class="fr addFriends" color="#000"></Icon> -->
   <!--      <router-link to="/read/my">收藏</router-link>
        <router-link to="/read/readhistory ">阅读</router-link>
        <router-link to="/read/sendhistory ">推送</router-link> -->
        <ul>
         <li v-for="(item,index) in liData"  :key="index" v-bind:class="{'on':flag==$index}" v-on:click='light($index)'><router-link :to="item.label">{{item.name}}</router-link></li>
         </ul>
       </h2>
     </header-bar>
      <section class='m_content'>
     <!-- <tools></tools> -->
    <div class="collect_content">
     <ul class="homeNav">
        <li v-for="(item,index) in navbar" :key="index" class="navBarLi">
            <router-link :to="{path:item.url,query:{type:item.type}}">{{item.text}}</router-link>
        </li>
     </ul>
    <div v-show="loading" v-loading="loading" element-loading-text="拼命加载中" style="width: 100%" class="loading"></div>
    <transition enter-active-class="bounceInLeft" leave-active-class="bounceOutRight">
        <ul class="newsContent animated" v-show="!loading&&ifReturnMsg">
            <router-link v-for="(val,index) in listCon"
              :to="{
                    name:'newsdetail',
                    params:
                        {   id:val.tag_id,
                            title:val.title,
                            media_info:val.media_info,
                            media_name:val.media_name,
                            datetime:val.datetime,
                            abstract:val.abstract,
                            image_list:val.image_list,
                            repin_count:val.repin_count,
                            comment_count:val.comment_count,
                            keywords:val.keywords
                        }
                }"
                class="newsDetaile"
                :key="index">
                <p class="title">{{val.title}}</p>
                <div>
                    <img alt="加载出错" v-for="(img,index) in val.image_list" :key="index"  v-lazy="img.url">
                    <div class="bottomInfo clearfix">
                        <span class="writer">{{val.media_name}}</span> &nbsp;&nbsp;
                        <span class="comment_count"><i class="el-icon-edit"></i>评论&nbsp;{{val.comment_count}}</span>
                        <span class="datetime">{{val.datetime|date}}</span>
                    </div>
                </div>
            </router-link>
        </ul>
    </transition>
 <!--    <div class="pulldownload" v-show="downLoadMore" @click="pulldownloadmore({kind:first || $router.query.type,flag:downLoadMore})">
        点击加载更多
    </div> -->
    </div>
     <bottom-nav ></bottom-nav>
     <to-top></to-top>
     </section>
  </div>
</template>

<script>
import moment from 'moment'
import toTop from '../components/To-top.vue'
import headerBar from '../components/Header-bar.vue'
import bottomNav from '../components/Bottom-nav.vue'
import * as type from '../store/index.js'
import {
    mapActions,
    mapState,
    mapGetters
} from 'vuex'

export default {
  name: 'read',
  components: {
        headerBar,
        bottomNav,
        toTop
  },
  data () {
    return {
      msg: '阅读',
      myCollect: [],
      top: false,
      first: window.location.search.substring(6),
      active:0,
      flag:0,
      liData:[
        {name:"咨询",label:"/read/news"},
        {name:"话题",label:"/read/title"}
      ],
      navbar: [{
                    text: '推荐',
                    url: '/read/all',
                    type: '__all__'
                },
                {
                    text: '热点',
                    url: '/read/hot',
                    type: 'news_hot'
                },
                {
                    text: '社会',
                    url: '/read/society',
                    type: 'news_society'
                },
                {
                    text: '娱乐',
                    url: '/read/entertainment',
                    type: 'news_entertainment'
                },
                {
                    text: '科技',
                    url: '/read/tech',
                    type: 'news_tech'
                },
                {
                    text: '汽车',
                    url: '/read/car',
                    type: 'news_car'
                },
                {
                    text: '体育',
                    url: '/read/sports',
                    type: 'news_sports'
                },
                {
                    text: '财经',
                    url: '/read/finance',
                    type: 'news_finance'
                },
                {
                    text: '军事',
                    url: '/read/military',
                    type: 'news_military'
                },
                {
                    text: '国际',
                    url: '/read/world',
                    type: 'news_world'
                },
                {
                    text: '时尚',
                    url: '/read/fashion',
                    type: 'news_fashion'
                },
            ]

    }
  },
  computed: {
        ...mapGetters([
            'newsList',
            'loading',
            'list',
            'ifReturnMsg',
            'oneDetail',
            'routerChange',
            'downLoadMore'
        ]),
        listCon: function() {
            if (this.$route.query.type) {
                return this.list[this.$route.query.type];
                console.log(this.$route.query.type);
            } else {
                return this.list[this.first]
            }
        },
    },
    methods: {
         ...mapActions([
            'getNews'
        ]),
        handleScroll() {
            this.top = window.document.body.scrollTop > 400;
        },
        light:function(index){
            this.flag=index;
        }
    },
    mounted() {
        this.getNews({
            kind: this.first,
            flag: this.routerChange
        });
        console.log('***********router*********',this.routerChange);
        this.loading = true;
        const _this = this;
        window.addEventListener('scroll', this.handleScroll);
    },
    watch: {
        '$route': function() {
            this.getNews({
                kind: this.$route.query.type,
                flag: this.routerChange
            });
            console.log('***1***', this.$route.query.type);
            console.log('***2***', this.routerChange);
            if (this.routerChange) {
                this.$store.commit(type.CHANGE_LOADING_STATE, true)
            } else {
                this.$store.commit(type.CHANGE_LOADING_STATE, false)
            }
            this.first = window.location.search.substring(6);
            this.$store.commit(type.ROUTERCHANGE, true);
            // this.$store.commit(type.PULLDOWNBTN, false);
        }
    },
     filters: {
        date: function(input) {
            if (!input) {
                return ''
            }
            var time = moment(input).startOf('minute').fromNow();
            // var reg = /(([1-9][0-9]{0,1})\s)minutes ago/.exec(time);
            return time;
        }
    }
}
</script>

<style  lang="less">
@import '../assets/css/sprite.css';
.read{
  header{background: #fafafa;
     .tit{
      li{display: inline-block;
            a{margin:.2rem;color: #333;
          &.router-link-active{padding-bottom:.2rem;border-bottom:2px solid #425a94;color:#425a94 }
        }
      }
     }
  }
  .homeNav {
    width: 100%;
    overflow: hidden;
    overflow-x: auto;
    text-align: center;
    position: fixed;
    // left: 0;
    font-size: 0;
    top: 1.55rem;
    background: #fff;
    white-space: nowrap;
    z-index: 999;
    border-bottom: 0.025rem solid #e4e4e4;
    .navBarLi {
        display: inline-block;
        line-height: 1.6rem;
        width: 2.3rem;
        font-size: .6rem;
        a {
            padding: .1rem .4rem;border-radius: 10px;background: #f4f6f9;border:0.025rem solid #f4f6f9;color: #999;
        }
        .router-link-active {
            border: 0.025rem solid #425a94;
            background: #fff;
            color: #425a94;
        }
    }
}

.loading {margin-top: 4rem;min-height: 4rem}
.el-loading-mask{background: none;}
.newsLoadError { margin: 2.3rem auto;font-size: 25px;width: 90%;}
.newsContent {
    padding: .8rem 0 2.3rem;
    width: 100%;
    .newsDetaile {
        width: 94%;
        display: block;
        position: relative;
        margin: 0 auto;
        padding-bottom: 0.15rem;
           border-bottom: 0.025rem solid #e4e4e4;
        .title {
            text-align: left;
            font-size: .6rem;
            color: #333;
            padding-top: 0.2rem;
            padding-bottom: 0.15rem;
        }
        img {
            display: inline-block;
            width: 31.1%;
            margin-right: 0.21rem;
            height: 2.3rem;
        }
        .bottomInfo {
            text-align: left;
            font-size: 10px;
            margin-top: 0.15rem;
            .writer {
                color: #999;
            }
            .comment_count {
                color: #999;
            }
            .datetime {
                float: right;
                color: #999;
            }
            .avIcon {
                display: inline-block;
                height: 0.4rem;
                width: 0.9rem;
                text-align: center;
                line-height: 0.4rem;
                border-radius: 4px;
                border: 1px solid #39f;
                font-size: 10px;
                margin-right: 0.1rem;
            }
        }
    }
}
}
</style>
