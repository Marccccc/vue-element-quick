<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
    height: 100%;
}
body{
  margin: 0
}
html,body{
    height: 100%;
    width: 100%;
}
nav{
  background-color: #001529;
  .el-menu-item{
    color: rgba(255, 255, 255, 0.65);
    height: 48px;
    &:hover{
      background-color:#001529;
      color: white;
    } 
    &.is-active{
      background-color:#1890ff;
      color: white;
      &:hover{
        background-color:#1890ff;
        color: white;
      }
    }
  }
  .el-menu{
      background-color:#001529;
      border: none; 
  }
  .el-submenu{
    .el-submenu__title{    
      height: 48px;
     background-color: #001529;
      &:hover{
        background-color:#001529;
        color: white;
      } 
      color:rgba(255, 255, 255, 0.65);
    }
    .el-menu-item{
      height: 44px;
      &:hover{
        background-color:#000c17;
        color: white;
      }
      &.is-active{
        &:hover{
          background-color:#1890ff;
          color: white;
        }
      } 
    }
    .el-menu{
      background-color:#000c17; 
      &:hover{
        background-color:#000c17;
      }
    }
  }
}
</style>
