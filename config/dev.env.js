'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  DEV_API_URL:'"https://www.easy-mock.com/mock/5a255ac197716c2a747772a1/demo"'
})
