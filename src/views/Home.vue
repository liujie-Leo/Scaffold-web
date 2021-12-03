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
        <van-grid-item icon="photo-o" text="节流" @click="onThrottle()" />
        <van-grid-item icon="photo-o" text="防抖" @click="onDebounce" />
        <van-grid-item icon="photo-o" text="文字" />
        <van-grid-item icon="photo-o" text="文字" />
        <van-grid-item icon="photo-o" text="文字" />
      </van-grid>
    </div>
  </div>
</template>

<script>
import { login, getData } from 'api/modules/apiModule'
import { throttle, deBounce } from 'utils/tools'
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
    },
    onThrottle () {
      throttle(() => { this.$toast({ message: 'handle', duration: 200 }) })
    },
    onDebounce () {
      deBounce(() => { this.$toast({ message: 'handle' }) })
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
