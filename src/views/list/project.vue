<template>
  <div>
    <div>
    <el-row>
      <el-col :span="8">
        <div>
          <span>正在执行项目</span>
          <p>12</p>
        </div>
      </el-col>
      <el-col :span="8">
        <div>
          <span>业务分类</span>
          <p>12</p>
        </div>
      </el-col>
      <el-col :span="8">
        <div>
          <span>即将完成项目</span>
          <p>12</p>
        </div></el-col>
    </el-col>
    </el-row>
    </div>
  <div>
    <div>
      <p>中天钢厂</p>
      <p>雪狼商贸有限公司</p>
    </div>
  </div>
    <p>销售合同数</p>
    <p>采购合同数</p>
  </div>
  </div>
  </div>
  </div>
</template>

<script>
import AssistBaseList from './assist-base-list'
import { getStatusLogs } from '@/api/list'

export default {
  mixins: [AssistBaseList],
  data () {
    return {
      pageSearch: getStatusLogs
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
