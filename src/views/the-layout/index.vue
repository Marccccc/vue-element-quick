<template>
  <div class="layout">
    <layout-aside :class="['aside',expand?'aside__expend':'aside__collapse']" :expand="expand" :style="flex"></layout-aside>
    <div class="body">
      <layout-header class="header" :expand="expand" @changeSider="()=>expand=!expand"></layout-header>
      <layout-main class="main"></layout-main>
    </div>
  </div>
</template>

<script>

import LayoutAside from './layout-aside'
import LayoutHeader from './layout-header'
import LayoutMain from './layout-main'

export default {
  components: { LayoutAside, LayoutHeader, LayoutMain },
  computed: {
    flex () {
      return this.expand ? {flex: '0 0 64px;'} : {}
    }
  },
  data () {
    return {
      expand: true
    }
  }
}
</script>

<style lang="scss" scoped>
.layout {
  height: 100%;
  width: 100%;
  display: flex;
  .aside {
    box-shadow: 2px 0 6px rgba(0, 21, 41, 0.35);
  }
  .aside__expend{
    flex: 0 0 212px;    
  }
  .aside__collapse{
    flex: 0 0 64px;    
  }
  .body {
    flex: 1;
    display: flex;
    flex-direction: column;
    .header {
      flex: 0 0 64px;
    }
    .main {
      flex: 1;
    }
  }
}
</style>
