<template>
<nav>
  <div class="logo">
    <base-icon name="Slack" :style="logoMargin"/>
    <h1 v-if="expand">
      VE Quick 
    </h1>
  </div>
  <el-menu default-active="2" router :collapse="!expand">
      <template v-for="(nav,index) in navs">
        <el-submenu v-if="nav.children.length>1" :index="nav.path" :key="nav.path">
          <template slot="title"><div class="expend-title"> <base-icon :name="nav.icon"/>
      <span slot="title">{{nav.name}}</span></div> </template>
          <el-menu-item v-for="(childNav,childIndex) in nav.children" :index="nav.path+'/'+childNav.path" :key="nav.path+'/'+childNav.path">
            <base-icon :name="childNav.icon"/><span slot="title">{{childNav.name}}</span>
            </el-menu-item>
        </el-submenu>
        <el-menu-item v-else :index="nav.path" :key="nav.path">
            <base-icon :name="nav.icon"/><span slot="title">{{nav.children[0].name}}</span>
            </el-menu-item>
      </template>
    </el-menu>
</nav>
</template>

<script>
export default {
  props: ['expand'],
  computed: {
    logoMargin () {
      return {'margin-left': this.expand ? '20px' : '14px'}
    },
    /** 只支持二级导航 */
    navs () {
      let authRoutes = this.$router.options.authRoutes
      let asideItems = []
      authRoutes.forEach(route => {
        if (route.self) {
          asideItems.push({ path: route.path, name: route.name })
        } else {
          let item = { path: route.path, name: route.name }
          item.children = []
          route.children.forEach(childRoute => {
            item.children.push({ path: childRoute.path, name: childRoute.name })
          })
          asideItems.push(item)
        }
      })
      return this.$router.options.authRoutes
    }
  },
  data () {
    return {
    }
  },
  methods: {
    toItem (route) {

    }
  }
}
</script>

<style lang="scss" scoped>
.el-menu-item,.expend-title{
  display: flex;
  align-items: center;
  .base-icon{
    padding-right: 6px;
  }
}
.el-menu{
  margin-top:10px; 
}
.logo{
  height: 60px;
  background-color: #002140;
  font-size: 32px;
  line-height: 60px;   
   display: flex;
    align-items: center;
    justify-content: flex-start;
  h1{
    margin: 0px;   
    display: flex;
    align-items: center;
    font-family: Hiragino Sans GB;
    font-size: 20px;
    color: white;
    flex-grow: 1;
    margin-left: 6px;
    height: 60px;
  }
  .base-icon{
    margin-left: 20px;
  }
}
.expend-title{
  height: 48px;
}

</style>
