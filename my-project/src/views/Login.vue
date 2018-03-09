<template>
    <div class="login_register">
        <div class="login-wrap" v-show="showLogin">
          <ul>
              <li> <h2>登录</h2></li>
              <li> 
                 <!-- <input type="text" placeholder="请输入用户名" v-model="username"> -->
                  <mu-text-field label=" " v-model="username" hintText="请输入用户名" type="text" />
                  <!-- <el-input v-model="username" placeholder="请输入内容"></el-input> -->
              </li>
              <li>
               <mu-text-field v-model="password" hintText="请输入密码" type="password"  />
                  <!-- <input type="password" placeholder="请输入密码" v-model="password"> -->
                  <!-- <mu-text-field label="请输入密码" errorColor="#000" v-model="password" labelFloat/> -->
              </li>
              <li> 
              <!-- <button @click="login">登录</button> -->
               <mu-raised-button class="loginRadius" label="登录" @click="login"  primary  fullWidth/>

              </li>
              <li><span @click="ToRegister">立即注册</span>&nbsp;&nbsp;|&nbsp;&nbsp;<span @click="ToRegister">忘记密码</span></li>
          </ul>           
        
        </div>

        <div class="register-wrap" v-show="showRegister">  
            <ul>
            <li>
             <mu-text-field v-model="newUsername" hintText="请输入手机号" type="text" fullWidth />
            <!-- <input type="text" placeholder="请输入手机号" v-model="newUsername"> -->
            </li>
            <li>
            <!-- <input type="text" placeholder="请输入验证码" v-model="checknum"> -->
            <mu-text-field v-model="checknum" hintText="请输入验证码" type="text" fullWidth />
            </li>
            <li>
            <!-- <input type="text" placeholder="请输入密码" v-model="newPassword"> -->
            <mu-text-field v-model="newPassword" hintText="请输入密码" type="text" fullWidth />
            </li>
            <li>
            <!-- <input type="password" placeholder="确认密码"> -->
            <mu-text-field hintText="确认密码" type="password" fullWidth />

            </li>
            <li>
            <!-- <input type="password" placeholder="邀请码(选填)" v-model="invited"> -->
             <mu-text-field v-model="invited" hintText="邀请码(选填" type="password" fullWidth />
            </li>
            <li><p><input type="checkbox" checked="checked" class="check">我已阅读并接受<em>华海乐盈律师平台相关协议</em></p></li>
            <li>
            <!-- <button @click="register">注册</button> -->
             <mu-raised-button class="loginRadius" label="注册" @click="register"  primary  fullWidth/>
            </li>
            <li><span @click="ToLogin">已有账号？马上登录</span></li>
            </ul>
        </div>
          <mu-popup position="bottom" :overlay="false" popupClass="demo-popup-top" :open="bottomPopup">
    登录失败，请检查用户名和密码
  </mu-popup>
    </div>
</template>
<script>
import * as type from '../store/index.js'
import {mapGetters,mapActions} from 'vuex'
import { LoginByUser, logout, getInfo } from '@/api/config';
const md5 = require('js-md5');
export default{
        data(){
            return{
                bottomPopup: false,
                showLogin: true,
                showRegister: false,
                checknum: '',
                 invited: '',
                username: '',
                password: '',
                newUsername: '',
                newPassword: ''
            }
        },
        methods:{
           //使用 mapActions 辅助函数将组件的 methods 映射为 store.dispatch 调用
            ...mapActions([
            'loginUsername',
            'setHeadImg',
            'logined'
            ]),   
          login:function(){
                if (this.username === '') {
                    let position = 'bottom';
                    this.open(position);
                     return;
                } else if (this.password === '') {
                    let position = 'bottom';
                    this.open(position);
                     return;
                }
                 let  loginName = this.username,
                      pwd = this.password;
                  new Promise((resolve, reject) => {
                  LoginByUser(loginName, md5(pwd)).then(response => {
                    const data = response.data,
                         token = data.token,
                         loginName = data.data.userName,
                         userImg = data.data.logo;
                    if(data.code == 1){ 
                        this.loginUsername(loginName);
                        this.setHeadImg(userImg);
                        this.logined(token);
                        this.$router.push('/my');
                    }
                   resolve(response);
                  }).catch(error => {
                    reject(error);
                  });
                });
            },
            open(position) {
              this[position + 'Popup'] = true
            },
            register:function(){

            },
            ToRegister:function(){
                this.showLogin = false;
                this.showRegister = true;
            },
            ToLogin:function(){
                this.showLogin = true;
                this.showRegister = false;

            }
        },
        watch: {
           bottomPopup (val) {
              if (val) {
                setTimeout(() => {
                  this.bottomPopup = false
                }, 2000)
              }
            }
          }
    }
</script>
<style lang="less">
body{background: #fff}
.mu-text-field{border-width:0.24rem;border-color:#455b85;color:rgba(0,0,0,.54)}
.mu-text-field.focus-state{color: #000}
.mu-text-field-focus-line{background-color: #000}
.demo-popup-top {width: 100%; opacity: .8;height: 48px;line-height: 48px;display: flex;align-items: center;
    justify-content: center;max-width: 375px;background: #000;color:#fff}
.login-wrap,.register-wrap{overflow: hidden;
    h2{font-size:1rem;text-align: center;}
    li{ margin-top: .5rem;
        p{text-align: left;
           em{color: #1A9BFC}
       }
        .mu-text-field-content{text-align: left;}
        .loginRadius{width:256px;height:40px; line-height: 40px;background: #455b85;font-size:16px;border-radius: 5px}
        span{cursor:pointer;text-align: left;
            &:hover{color:#41b883;}
        }
    }
    li:nth-child(1) img{ margin: -5rem 0 1rem 0}

}
.login-wrap{padding: 5rem 2rem 0rem 2rem;}
.register-wrap{padding: 2rem 2rem}
</style>















































































}
   
</style>