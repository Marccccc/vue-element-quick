<template>
  <header>
    <div class="instruction click"  @click="handleButton">
      <base-icon name="category" :style="isTrans"/>
    </div>
    <div class="info">
      <el-dropdown class="inform click" trigger="click">
        <span>
          <base-icon name="remind"/>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item><base-icon class="icon" name="edit"/>测试</el-dropdown-item>
          <el-dropdown-item><base-icon class="icon" name="resetpassword"/>测试</el-dropdown-item>
          <el-dropdown-item divided><base-icon class="icon" name="logout"/>测试</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <el-dropdown class="user click">
        <span>
          用户名
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item><base-icon class="icon" name="edit"/>编辑资料</el-dropdown-item>
          <el-dropdown-item><base-icon class="icon" name="resetpassword"/>修改密码</el-dropdown-item>
          <el-dropdown-item divided><base-icon class="icon" name="logout"/>注销</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </header>
</template>

<script>
export default {
  props: ['expand'],
  computed: {
    isTrans () {
      return this.expand ? {} : {transform: 'rotate(90deg)'}
    }
  },
  data () {
    return {}
  },
  methods: {
    handleButton () {
      this.$emit('changeSider')
    }
  }
}
</script>

<style lang="scss" scoped>
header{
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  padding-right: 16px;    
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
  .instruction{
    align-items: center;
    display: flex;
    padding:0 0.6em; 
    font-size: 26px;
  }
  .info{
    display: flex;
    justify-content: flex-end;
    align-items: stretch;
    .inform{
      display: flex;
      width: 42px;
    }
    .user{
      display: flex;
      justify-content: center;
      padding: 0px 12px;
    }
    span{
      line-height: 64px;
      text-align: center;
      flex-grow: 1;
    }
  }
  .click{
    &:hover { background-color: #e6f7ff;cursor:pointer  }
  }
}
.icon{
  padding-right:10px; 
  font-size: 1.2em;
}
</style>
