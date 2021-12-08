<template>
  <div class="home">
    <div class="header">
      <img src="https://cn.vuejs.org/images/logo.svg">
      <div>Project Name</div>
      <el-button @click="onLogin">登录</el-button>
    </div>
    <div />
  </div>
</template>

<script>
import { login, getData } from 'api/modules/apiModule'
export default {
  data () {
    return {
      loading: false
    }
  },
  methods: {
    async onLogin () {
      const params = {
        email: 'ljdhxd@qq.com',
        password: 'Lj416720'
      }
      const res = await login(params).catch(e => { console.log('featch') })
      if (res) {
        this.$message.success('登陆成功')
      }
    },
    async getData () {
      const res = await getData()
    }
  }

}
</script>
<style lang="less" scoped>
.header{
  padding: 24px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  img{
    width: 54px;
    margin-bottom: 12px;
  }
}
</style>
