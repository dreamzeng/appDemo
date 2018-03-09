<template>
<div id="Editprofile">
     <header-bar>
        <div class="editprofile-header" slot="editprofile-header">
             <i class="fl material-icons back"  @click="$router.go(-1)">arrow_back_ios</i>
            个人信息
        </div>
     </header-bar>
     <section class="m_content">
    <div class="editprofile_item_1">
        <div class="containner">
            <div class="editprofile_item">
                头像
                <Icon type="ios-arrow-right" size="26" color="#ccc" class="fr toEdit"></Icon>
                <img src="../assets/img/head.jpg" alt="" class="fr headPic">
                <input type="file" class="file">
            </div>
            <el-button is="div" type="text"  class="editprofile_item">
                用户名
                <Icon type="ios-arrow-right" size="26" color="#ccc" class="fr toEdit"></Icon>
                <span class="fr username" v-model="userName">{{this.$store.state.drawerUsername}}</span>
            </el-button>
            <el-button is="div" type="text" @click="editintroduce"  class="editprofile_item">
                介绍
                <Icon type="ios-arrow-right" size="26" color="#ccc" class="fr toEdit"></Icon>
                <span class="fr username" v-model="introduce">{{this.$store.state.introduce}}</span>
            </el-button>
        </div>
    </div>
    </section>
</div>
</template>
<script>
import * as type from '../store/index.js'
import headerBar from '@/components/Header-bar.vue'
import {
    mapGetters
} from 'vuex'
export default {
    components: {
        headerBar
    },
    computed: {
        ...mapGetters([
            'drawerUsername'
        ])
    },
    methods:{
        
    }
}
</script>
<style lang="less">
#Editprofile {
    .editprofile-header {
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
    .editprofile_item_1{
       background: #fff;border-top:0.025rem solid #e4e4e4;border-bottom:0.025rem solid #e4e4e4;
        .containner{
            width: 94%;
            margin: 0 auto;
           .editprofile_item{
                height: 1.5rem;
                width: 100%;
                line-height: 1.5rem;
                color: #000;
                position: relative;
                padding-left: 0.3rem;
                border-bottom: 1px solid #e4e4e4;
                text-align: left;
                .toEdit{
                    margin-top: .2rem;
                }
                .username{
                    margin-right: .2rem;
                    font-size: 14px;
                    font-weight: normal;
                }
                .headPic{
                    margin-right: .2rem;
                    margin-top: .25rem;
                    border-radius: 50%;
                    height: 25px;
                    width: 25px;
                }
                .file{
                    position: absolute;
                    top :-5px;
                    display: inline-block;
                    opacity: 0
                }
            } 
        }
    }
}
.el-message-box{
    width: 100% !important;
}
</style>
