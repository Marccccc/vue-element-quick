import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/views/the-layout'

const _import = require('@/router/components-import')

Vue.use(Router)

const authRoutes = [
  { path: '/workplace', component: Layout, icon: 'workplace', self: true, children: [{ path: '', name: '工作台', component: _import('wait') }] },
  { path: '/analysis', component: Layout, icon: 'analysis', self: true, children: [{ path: '', name: '分析页', component: _import('analysis') }] },
  { path: '/monitoring', component: Layout, icon: 'analysis', self: true, children: [{ path: '', name: '监控页', component: _import('monitoring') }] },
  { path: `/system`,
    name: '列表页',
    component: Layout,
    icon: 'survey',
    children: [
      { path: 'userStatus', name: '查询表格-用户状态', icon: 'form', component: _import('list/base') },
      { path: 'departmen', name: '列表表格', icon: 'form', component: _import('wait') },
      { path: 'customer', name: '卡片列表', icon: 'form', component: _import('wait') },
      { path: 'user', name: '用户管理', icon: 'form', component: _import('wait') },
      { path: 'role', name: '角色管理', icon: 'form', component: _import('wait') },
      { path: 'position', name: '职位管理', icon: 'form', component: _import('wait') }
    ]
  }
]

/** 待完成权限控制 */
export default new Router({
  routes: [
    { path: 'login', name: '登录', component: _import('login/index') },
    { path: '/', name: '主布局', component: Layout }
  ].concat(authRoutes),
  authRoutes: authRoutes
})
