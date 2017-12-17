<template>
  <div>
    <base-list ref="list" :conditions="conditions" :pageSearch="pageSearch" :records.sync="records">
      <el-form :inline="true" slot="search" :model="conditions" class="search-form">
        <el-row>
          <el-col :span="20">
            <el-form-item label="用户名:">
              <el-input v-model="conditions['search_LIKE_name']"></el-input>
            </el-form-item>
            <el-form-item label="地区:">
              <el-input v-model="conditions['search_LIKE_code']"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="4" class="search-tool">
            <el-button type="primary" icon="el-icon-search" @click="loadData">查 询</el-button>
          </el-col>
        </el-row>
      </el-form>
      <el-table slot="list" :data="records" border highlight-current-row>
        <el-table-column type="index" label=" " width="50" align="center">
        </el-table-column>
        <el-table-column prop="user.name" label="用户" align="center">
        </el-table-column>
        <el-table-column prop="status" label="状态" align="center">
        </el-table-column>
        <el-table-column prop="locationProvince" label="所在省" align="center">
        </el-table-column>
        <el-table-column prop="locationCity" label="所在市" align="center">
        </el-table-column>
        <el-table-column prop="locationCounty" label="所在区" align="center">
        </el-table-column>
        <el-table-column prop="lastLoginTime" label="最后登录时间">
        </el-table-column>
        <el-table-column label="操作" width="180" align="center">
          <template slot-scope="scope">
          </template>
        </el-table-column>
      </el-table>
    </base-list>
  </div>
</template>

<script>

import AssistBaseList from './assist-base-list'
import { getStatusLogs } from '@/api/list'

export default {
  mixins: [ AssistBaseList ],
  data () {
    return {
      pageSearch: getStatusLogs
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
