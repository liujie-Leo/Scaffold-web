<template>
  <div id="app">
    <keep-alive>
      <router-view
        v-if="$route.meta.keepAlive"
        :key="$route.fullPath"
      />
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive" />
  </div>
</template>

<script>
export default {

}
</script>
