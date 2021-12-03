<template>
  <div class="home">
    <div class="header">
      <img src="https://cn.vuejs.org/images/logo.svg">
      <div>Project Name</div>
    </div>
    <div>
      <van-grid>
        <van-grid-item icon="photo-o" text="login" @click="onLogin()" />
        <van-grid-item icon="photo-o" text="获取数据" @click="getData()" />
        <van-grid-item icon="photo-o" text="文字" />
        <van-grid-item icon="photo-o" text="文字" />
        <van-grid-item icon="photo-o" text="文字" />
        <van-grid-item icon="photo-o" text="文字" />
        <van-grid-item icon="photo-o" text="文字" />
      </van-grid>
    </div>
  </div>
</template>

<script>
import { login, getData } from 'api/modules/apiModule'
export default {
  data () {
    return {

    }
  },
  methods: {
    async onLogin () {
      const params = {
        email: 'ljdhxd@qq.com',
        password: 'Lj416720'
      }
      const res = await login(params).catch(e => { console.log('featch') })
      console.log(res)
    },
    async getData () {
      const res = await getData()
      console.log(res)
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
