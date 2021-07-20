<template>
  <div class="about">
    <div style="width: 500px">
      <el-form
          ref="loginForm"
          :model="login"
          label-width="70px"
          class="form-box"
      >
        <el-form-item label="用户名" prop="username">
          <el-input v-model="login.username"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <div class="passwrod-cont">
            <el-input type="password" v-model="login.password"></el-input>
          </div>
        </el-form-item>
      </el-form>
    </div>
    <div><button @click="handleSubmit">提交</button></div>
    <div><button @click="getUser">获取</button></div>
  </div>
</template>
<script>
  import Vue from 'vue';
  import { Form, FormItem, Input } from 'element-ui';

  Vue.component(Form.name, Form);
  Vue.component(FormItem.name, FormItem);
  Vue.component(Input.name, Input);
  export default {
      name: 'Login',
      data(){
          return{
              login:{
                  username: '',
                  password: '',
                  type: 'common'
              }
          }
      },
      mounted(){
          this.$store.commit('SET_TOKEN', '456')
          console.log(this.$store.state)
      },
      methods: {
          handleSubmit(){
            this.$api.user.login(this.login).then((res)=>{
              console.log(res)
            }).catch((err)=>{

            })
          },
          getUser(){
              this.$api.user.getUserInfo().then(()=>{

              }).catch((err)=>{
                console.log(err)
              })
          }
      }
  }
</script>
<style lang="scss" scoped>

</style>
