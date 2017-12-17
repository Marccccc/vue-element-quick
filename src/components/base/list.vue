<template>
  <section class="base-list">

    <el-row class="search">
      <slot name="search"></slot>
    </el-row>

    <el-row class="operbar" v-if="isShowOper">
      <slot name="operbar"></slot>
    </el-row>

    <el-row class="content" v-loading="loading" :element-loading-text="loadText">
      <slot name="list"></slot>
    </el-row>

    <el-row class="bottom" type="flex" v-if="isPaging">
      <div class="oper">
        <slot name="oper"></slot>
      </div>
      <el-pagination class="page" @size-change="size=>pageInfo.size=size" layout="total, sizes, prev, pager, next, jumper"
        :current-page.sync="pageInfo.current" :page-sizes="pageInfo.sizes" :page-size="pageInfo.size" :total="total">
      </el-pagination>
    </el-row>
  </section>
</template>

<script>

export default {
  name: 'base-list',
  props: {

    // 分页条件
    conditions: {
      type: Object,
      default: () => {}
    },

    // 分页方法
    pageSearch: {
      type: Function,
      require: true
    },
    // 列表数据集
    records: {
      type: Array,
      require: true
    },
    // 列表加载文本
    loadText: {
      type: String,
      default: '列表加载中...'
    },
    // 是否分页
    isPaging: {
      type: Boolean,
      default: () => true
    },
    // 分页控制
    pageInfo: {
      type: Object,
      default: () => {
        return {
          current: 1,
          size: 10,
          sizes: [10, 20, 50, 100, 500]
        }
      }
    }
  },
  computed: {
    isShowOper: function () {
      return Boolean(this.$slots.operbar)
    }
  },
  data () {
    return {
      loading: false, // 列表加载状态
      commonVisible: false,
      total: 0
    }
  },
  methods: {
    loadData () {
      let params = JSON.parse(JSON.stringify(this.conditions))
      params.current = this.pageInfo.current
      params.size = this.isPaging ? this.pageInfo.size : 0
      this.loading = true // 设置为加载状态
      this.pageSearch(params).then(reponse => {
        this.$emit('update:records', reponse.data.records)
        this.total = reponse.data.total
        this.loading = false // 取消加载状态
      }).catch(() => {
        this.loading = false // 取消加载状态
      })
    }
  },
  watch: {
    pageInfo: {
      deep: true,
      handler: function () {
        this.loadData()
      }
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
</style>